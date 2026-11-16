/* 바탕화면 아이콘 앱(웹판)에만 붙는 것 — 오프라인 저장 등록 · 「홈 화면에 추가」 안내
   클로드 안(아티팩트)에서는 이 파일을 안 쓴다 */
(() => {
  if ('serviceWorker' in navigator) addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  if (standalone) return;
  let skip = false; try { skip = localStorage.getItem('agility:installHide') === '1'; } catch (e) {}
  if (skip) return;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent), android = /android/i.test(navigator.userAgent);
  if (!ios && !android) return;                                   // 컴퓨터에서는 안 띄운다
  let prompt = null;
  const bar = document.createElement('div');
  bar.setAttribute('role', 'dialog'); bar.setAttribute('aria-label', '앱 설치 안내');
  bar.style.cssText = 'position:fixed;left:12px;right:12px;bottom:calc(84px + env(safe-area-inset-bottom,0px));z-index:70;background:#fff;color:#141c33;border-radius:18px;padding:14px 14px 12px;box-shadow:0 10px 30px rgba(20,40,90,.25);font:500 15px/1.45 system-ui,sans-serif;display:flex;flex-direction:column;gap:10px';
  const iosHow = '아래 <b>공유 단추(네모에 위 화살표)</b> → <b>「홈 화면에 추가」</b>를 누르면 바탕화면에 아이콘이 생겨요.';
  bar.innerHTML = `<div style="display:flex;gap:12px;align-items:center"><img src="icon-192.png" alt="" style="width:44px;height:44px;border-radius:11px;flex:none"><div><b>바탕화면에 앱으로 깔기</b><br><span style="color:#6b7a96;font-size:14px">${ios ? iosHow : '한 번 깔면 아이콘을 눌러 바로 열려요.'}</span></div></div>
    <div style="display:flex;gap:8px;justify-content:flex-end"><button data-x="no" style="font:700 14.5px system-ui;border:0;border-radius:12px;padding:10px 14px;background:#eef2fa;color:#3a4f80">다음에</button>${ios ? '' : '<button data-x="ok" style="font:700 14.5px system-ui;border:0;border-radius:12px;padding:10px 16px;background:#2457e6;color:#fff">깔기</button>'}</div>`;
  const show = () => { if (!bar.isConnected) document.body.appendChild(bar); };
  bar.addEventListener('click', async e => {
    const x = e.target.closest('[data-x]'); if (!x) return;
    if (x.dataset.x === 'no') { bar.remove(); try { localStorage.setItem('agility:installHide', '1'); } catch (e) {} return; }
    if (prompt) { prompt.prompt(); try { await prompt.userChoice; } catch (e) {} prompt = null; bar.remove(); }
    else bar.querySelector('span').innerHTML = '브라우저 오른쪽 위 <b>⋮ 메뉴</b> → <b>「홈 화면에 추가」</b> 또는 <b>「앱 설치」</b>를 눌러 주세요.';
  });
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); prompt = e; show(); });
  setTimeout(show, ios ? 1500 : 4000);                           // 안드로이드에서 설치 신호가 늦으면 안내만
})();
