document.getElementById('targetKanji').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // 1. 定義你想查詢的漢字
    const targetKanji = event.target.value.trim();
    // 2. 組合出完整的 API 網址 
    const apiUrl = `https://kanjiapi.dev/v1/kanji/${targetKanji}`;

    const rubyElement = document.getElementById('Kanji');
    const kun_reading = document.getElementById('kun_reading');
    const on_reading = document.getElementById('on_reading');

    // 3. 發送網路請求
    fetch(apiUrl)
    .then(response => {
      // 檢查網路回應是否成功（狀態碼 200~299）
      if (!response.ok) {
        throw new Error(`網路回應失敗：${response.status}`);
      }
      return response.json(); // 將回傳的資料轉換成 JavaScript 物件
    })
    .then(data => {
      // 4. 在這裡處理拿到的漢字資料
      
      // 舉例：提取我們想要的資訊
      console.log(`漢字: ${data.kanji}`);
      console.log(`筆畫: ${data.stroke_count}`);
      console.log(`英文意思: ${data.meanings.join(', ')}`);
      console.log(`訓讀 (Kun Readings): ${data.kun_readings.join(', ')}`);
      console.log(`音讀 (On Readings): ${data.on_readings.join(', ')}`);

      const kun_reading = data.kun_readings.join(', ');

      rubyElement.innerHTML = `
        ${data.kanji}
        <rt id="kun_reading">${kun_reading}</rt>
      `;

      // Kanji.textContent = `${data.kanji}`;
      // kun_reading.textContent = `${data.kun_readings.join(', ')}`;
      on_reading.textContent = `音讀: ${data.on_readings.join(', ')}`;

    })
    .catch(error => {
      // 處理錯誤（例如網址打錯、沒連網、或找不到該漢字）
      console.error("發生錯誤：", error);
    });
  }
});