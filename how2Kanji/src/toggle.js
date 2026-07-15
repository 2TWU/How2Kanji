export function toggleInit(){
  const toggleInput = document.getElementById('toggleInput');
  const statusMessage = document.getElementById('statusMessage');
  const body = document.body;

  // toggle 初始化
  // toggleInput.checked = false;    // toggle 初始化為關閉狀態
  // handleToggleStateChange(false); // toggle 狀態初始化為關閉

  // callback function
  function hiragana_sw(isOn)
  {
    console.log(`Toggle is ${isOn ? 'ON' : 'OFF'}`);
    statusMessage.textContent = `小工具已 ${isOn ? '開啟' : '關閉'}`;
  }

  toggleInput.addEventListener('change', () => {
    const isOn = toggleInput.checked;
    toggleInput.setAttribute('aria-checked', isOn);
    hiragana_sw(isOn);
  });
}