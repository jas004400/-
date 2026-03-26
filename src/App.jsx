import { useState, useEffect } from 'react'
import './App.css'

// 貓咪百科全書元件             
function 貓咪百科全書() {               //先定義此元件，裡面包含了搜尋功能和顯示貓咪知識的內容
  const [搜尋詞, set搜尋詞] = useState('')    // 定義一個名為「搜尋詞」的狀態變數，
                                            // 以及一個用來更新它的函式「set搜尋詞」
                                            // 初始值設定為空字串 ('')
  
  const 貓咪知識庫 = [                       // 定義一個包含貓咪相關知識的陣列，
                                            // 每個元素都是一個物件，
                                            // 包含「id」、「標題」和「內容」三個屬性
    {
      id: 1,
      標題: '貓咪的基本特徵',
      內容: '貓咪是一種獨立、敏捷的動物。成年貓的體重通常在2-5公斤之間，壽命約為12-18年。貓咪有銳利的爪子和強大的肌肉，是優秀的獵手。'
    },
    {
      id: 2,
      標題: '貓咪的視覺能力',
      內容: '貓咪的夜視能力非常強大，在黑暗中能看到人類的6倍遠。牠們的視野約為200度，且能快速追蹤移動的物體。貓咪對顏色的感知與人類不同，對藍色和綠色更敏感。'
    },
    {
      id: 3,
      標題: '貓咪的聽力',
      內容: '貓咪的聽力極其敏銳，能聽到64,000Hz的聲音，是人類聽力範圍的3倍。牠們的耳朵能獨立轉動超過100度，能精確定位聲音來源。'
    },
    {
      id: 4,
      標題: '貓咪的睡眠習慣',
      內容: '貓咪平均每天睡眠12-16小時。牠們是典型的蓄能者，喜歡在白天小睡，在夜間活動。充足的睡眠對貓咪的健康至關重要。'
    },
    {
      id: 5,
      標題: '貓咪的溝通方式',
      內容: '貓咪通過喵叫、呼嚕聲和肢體語言與人類溝通。豎起尾巴表示友好，壓低耳朵表示害怕或生氣。貓咪在見面時觸碰鼻子是一種親密的問候方式。'
    },
    {
      id: 6,
      標題: '貓咪的飲食需求',
      內容: '貓咪是完全肉食動物，需要高質量的蛋白質。牠們每天需要喝足夠的水。大多數寵物貓每天應食用兩餐，分量根據年齡和體重調整。'
    },
    {
      id: 7,
      標題: '貓咪的清潔習慣',
      內容: '貓咪是非常愛乾淨的動物，每天花費多達30%的清醒時間自我清潔。舔毛不僅能保持清潔，還能調節體溫和紓解壓力。'
    },
    {
      id: 8,
      標題: '貓咪的運動需求',
      內容: '貓咪需要定期運動和玩耍來保持健康和心理健康。互動式玩具和攀爬結構能幫助貓咪消耗能量和刺激狩獵本能。'
    }
  ]

  const 篩選結果 = 搜尋詞  // 根據使用者輸入的搜尋詞，從貓咪知識庫中篩選出符合條件的項目
    ? 貓咪知識庫.filter(   //?如果搜尋詞不為空，則使用 filter 方法對貓咪知識庫進行篩選
        (項) =>           // 括號內的函式會對每個項目進行檢查，判斷標題或內容是否包含搜尋詞
          項.標題.toLowerCase().includes(搜尋詞.toLowerCase()) ||  // 將標題和內容都轉換為小寫，確保搜尋不區分大小寫
          項.內容.toLowerCase().includes(搜尋詞.toLowerCase())     // || 如果標題或內容包含搜尋詞，則該項目會被保留在篩選結果中
      )
    : 貓咪知識庫  // :如果搜尋詞為空，則直接返回整個貓咪知識庫作為篩選結果

  return (     // 最後，元件會渲染一個包含搜尋輸入框和篩選結果的界面
    <div className="encyclopedia-container">     {/*包裹整個百科全書內容的容器，一個div框架，使用encyclopedia-container設定css*/}
      <div className="encyclopedia-header">       {/*顯示百科全書的標題和副標題*/}
        <h2>貓咪百科全書</h2>                 {/* 主標題*/}   
        <p className="encyclopedia-subtitle">探索貓咪的奧秘和習性</p> {/* 副標題*/}
      </div>                                   {/* 搜尋輸入框，讓使用者可以輸入搜尋詞來查找相關的貓咪知識*/}

      <div className="encyclopedia-search">   {/* 搜尋區域*/}
        <input
          type="text"
          placeholder="搜尋貓咪知識..."
          value={搜尋詞}
          onChange={(e) => set搜尋詞(e.target.value)}   /* 當使用者在輸入框中輸入內容時，onChange事件會觸發，e代表事件對象*/                                                 
          className="search-input"                        /*，並將輸入的值更新到搜尋詞狀態中，從而觸發篩選結果的更新.e.target.value代表使用者輸入的值*/
        />
        <span className="search-icon">🔍</span>            
      </div>
      {/* 顯示搜尋結果的資訊，例如找到多少個相關結果，或者提示使用者輸入搜尋詞來開始搜尋*/}
      <div className="search-results-info">
        {搜尋詞 && <p>找到 {篩選結果.length} 個相關結果</p>}
      </div>
      {/* 篩選結果的顯示區域，根據篩選結果的內容來決定顯示什麼內容 */}
      <div className="encyclopedia-grid">         
        {篩選結果.length > 0 ? (                               //使用條件運算符來判斷篩選結果是否有內容，如果有，
          篩選結果.map((項) => (                                //則渲染每個項目的標題和內容；如果沒有，
          // 則顯示一條提示訊息告訴使用者未找到相關內容，.map方法會對篩選結果中的每個項目進行迭代，為每個項目創建一個article元素，
          // 並顯示該項目的標題和內容。每個article元素都有一個唯一的key屬性，這裡使用項目的id作為key，以幫助React識別哪些項目已經改變、添加或刪除。*/}
            <article key={項.id} className="knowledge-card">  
              <h3>{項.標題}</h3>
              <p>{項.內容}</p>
            </article>
          ))
        ) : (
          <div className="no-results">
            <p>未找到相關內容，請嘗試其他搜尋詞彙</p>
          </div>
        )}
      </div>
    </div>
  )
}

// 我的貓咪管理元件
function 我的貓咪() {
  const [貓咪資料, set貓咪資料] = useState({      //useState用來定義一個名為「貓咪資料」的狀態變數，以及一個用來更新它的函式「set貓咪資料」
    名字: '',
    出生年: '',
    出生月: '',
    出生日: '',
    出生地點: '',
    顏色: '',
    個性: '',
    性別: '',
    眼珠顏色: '',
    圖片: null
  })
  
  const [體重記錄, set體重記錄] = useState([])
  const [新體重, set新體重] = useState('')
  const [記錄年, set記錄年] = useState('')
  const [記錄月, set記錄月] = useState('')
  const [記錄日, set記錄日] = useState('')
  const [圖片預覽, set圖片預覽] = useState(null)
  const [已儲存的貓咪, set已儲存的貓咪] = useState([])
  const [顯示個人檔案, set顯示個人檔案] = useState(false)
  const [選取的貓咪, set選取的貓咪] = useState(null)

  // 載入已儲存的貓咪資料
  useEffect(() => {
    const 儲存的資料 = localStorage.getItem('貓咪資料')
    if (儲存的資料) {
      const 解析資料 = JSON.parse(儲存的資料)
      // 處理舊資料格式的相容性
      const 處理後的資料 = 解析資料.map(貓咪 => {
        if (貓咪.出生年月日 && !貓咪.出生年) {
          // 如果是舊格式，嘗試解析日期
          const 日期 = new Date(貓咪.出生年月日)
          if (!isNaN(日期.getTime())) {
            return {
              ...貓咪,
              出生年: 日期.getFullYear().toString(),
              出生月: (日期.getMonth() + 1).toString(),
              出生日: 日期.getDate().toString()
            }
          }
        }
        return 貓咪
      })
      set已儲存的貓咪(處理後的資料)
    }
  }, [])

  const 處理輸入變化 = (欄位, 值) => {
    set貓咪資料(prev => ({
      ...prev,
      [欄位]: 值
    }))
  }

  const 處理圖片上傳 = (e) => {
    const 檔案 = e.target.files[0]
    if (檔案) {
      const 讀取器 = new FileReader()
      讀取器.onload = (e) => {
        const base64字串 = e.target.result
        set圖片預覽(base64字串)
        處理輸入變化('圖片', base64字串) // 儲存 base64 字串而不是檔案物件
      }
      讀取器.readAsDataURL(檔案)
    }
  }

  const 添加體重記錄 = () => {
    if (新體重 && 記錄年 && 記錄月 && 記錄日) {
      // 驗證日期
      if (!驗證日期(記錄年, 記錄月, 記錄日)) {
        alert('請輸入有效的記錄日期')
        return
      }

      const 新記錄 = {
        id: Date.now(),
        體重: parseFloat(新體重),
        年: 記錄年,
        月: 記錄月,
        日: 記錄日,
        日期: `${記錄年}-${記錄月.padStart(2, '0')}-${記錄日.padStart(2, '0')}` // 保持相容性
      }
      set體重記錄(prev => [...prev, 新記錄].sort((a, b) => {
        const 日期A = new Date(a.年, a.月 - 1, a.日)
        const 日期B = new Date(b.年, b.月 - 1, b.日)
        return 日期B - 日期A
      }))
      set新體重('')
      set記錄年('')
      set記錄月('')
      set記錄日('')
    } else {
      alert('請輸入體重和完整的記錄日期')
    }
  }

  const 刪除體重記錄 = (id) => {
    set體重記錄(prev => prev.filter(記錄 => 記錄.id !== id))
  }

  // 驗證日期
  const 驗證日期 = (年, 月, 日) => {
    if (!年 || !月 || !日) return true // 允許空值
    const 年數 = parseInt(年)
    const 月數 = parseInt(月)
    const 日數 = parseInt(日)
    
    if (年數 < 1900 || 年數 > 2030) return false
    if (月數 < 1 || 月數 > 12) return false
    
    const 日期 = new Date(年數, 月數 - 1, 日數)
    return 日期.getFullYear() === 年數 && 
           日期.getMonth() === 月數 - 1 && 
           日期.getDate() === 日數
  }

  // 儲存貓咪資料
  const 儲存貓咪資料 = () => {
    if (!貓咪資料.名字.trim()) {
      alert('請輸入貓咪名字')
      return
    }

    // 驗證日期
    if (貓咪資料.出生年 || 貓咪資料.出生月 || 貓咪資料.出生日) {
      if (!驗證日期(貓咪資料.出生年, 貓咪資料.出生月, 貓咪資料.出生日)) {
        alert('請輸入有效的出生日期')
        return
      }
    }

    const 新貓咪 = {
      id: Date.now(),
      ...貓咪資料,
      體重記錄: 體重記錄,
      建立時間: new Date().toISOString()
    }

    const 更新後的貓咪 = [...已儲存的貓咪, 新貓咪]
    set已儲存的貓咪(更新後的貓咪)
    localStorage.setItem('貓咪資料', JSON.stringify(更新後的貓咪))

    // 重置表單
    set貓咪資料({
      名字: '',
      出生年: '',
      出生月: '',
      出生日: '',
      出生地點: '',
      顏色: '',
      個性: '',
      性別: '',
      眼珠顏色: '',
      圖片: null
    })
    set體重記錄([])
    set圖片預覽(null)

    alert('貓咪資料已儲存！')
  }

  // 載入貓咪資料
  const 載入貓咪資料 = (貓咪) => {
    set貓咪資料({
      名字: 貓咪.名字,
      出生年: 貓咪.出生年 || '',
      出生月: 貓咪.出生月 || '',
      出生日: 貓咪.出生日 || '',
      出生地點: 貓咪.出生地點,
      顏色: 貓咪.顏色,
      個性: 貓咪.個性,
      性別: 貓咪.性別,
      眼珠顏色: 貓咪.眼珠顏色,
      圖片: 貓咪.圖片
    })
    // 處理體重記錄的相容性
    const 處理後的體重記錄 = (貓咪.體重記錄 || []).map(記錄 => {
      if (記錄.年 && 記錄.月 && 記錄.日) {
        // 新格式
        return 記錄
      } else if (記錄.日期) {
        // 舊格式，轉換為新格式
        const 日期 = new Date(記錄.日期)
        if (!isNaN(日期.getTime())) {
          return {
            ...記錄,
            年: 日期.getFullYear().toString(),
            月: (日期.getMonth() + 1).toString(),
            日: 日期.getDate().toString()
          }
        }
      }
      return 記錄
    })
    set體重記錄(處理後的體重記錄)
    set圖片預覽(貓咪.圖片)
  }

  // 顯示個人檔案
  const 顯示貓咪個人檔案 = (貓咪) => {
    set選取的貓咪(貓咪)
    set顯示個人檔案(true)
  }

  // 刪除貓咪
  const 刪除貓咪 = (id) => {
    const 更新後的貓咪 = 已儲存的貓咪.filter(貓咪 => 貓咪.id !== id)
    set已儲存的貓咪(更新後的貓咪)
    localStorage.setItem('貓咪資料', JSON.stringify(更新後的貓咪))
  }

  // 格式化日期
  const 格式化日期 = (貓咪) => {
    if (貓咪.出生年 && 貓咪.出生月 && 貓咪.出生日) {
      return `${貓咪.出生年}年${貓咪.出生月}月${貓咪.出生日}日`
    } else if (貓咪.出生年月日) {
      // 相容舊格式
      const 日期 = new Date(貓咪.出生年月日)
      if (!isNaN(日期.getTime())) {
        return 日期.toLocaleDateString('zh-TW', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }
    }
    return '未設定'
  }

  const 顏色選項 = ['黑白', '橘色', '灰色', '白色', '棕色', '虎斑', '其他']
  const 個性選項 = ['溫和', '活潑', '害羞', '獨立', '親人', '調皮', '其他']
  const 性別選項 = ['公', '母']
  const 眼珠顏色選項 = ['黃色', '綠色', '藍色', '棕色', '異色瞳', '其他']

  return (
    <div className="cat-profile-container">
      <div className="profile-header">
        <h2>我的貓咪</h2>
        <p className="profile-subtitle">管理您的貓咪資訊和健康記錄</p>
      </div>

      {/* 已儲存的貓咪列表 */}
      {已儲存的貓咪.length > 0 && (
        <section className="saved-cats-section">
          <h3>已儲存的貓咪</h3>
          <div className="saved-cats-grid">
            {已儲存的貓咪.map(貓咪 => (
              <div key={貓咪.id} className="saved-cat-card">
                <div className="cat-card-header">
                  {貓咪.圖片 && <img src={貓咪.圖片} alt={貓咪.名字} className="cat-thumbnail" />}
                  <h4>{貓咪.名字}</h4>
                </div>
                <div className="cat-card-info">
                  <p>出生: {格式化日期(貓咪)}</p>
                  <p>顏色: {貓咪.顏色}</p>
                  <p>個性: {貓咪.個性}</p>
                </div>
                <div className="cat-card-actions">
                  <button onClick={() => 載入貓咪資料(貓咪)} className="load-btn">載入</button>
                  <button onClick={() => 顯示貓咪個人檔案(貓咪)} className="profile-btn">個人檔案</button>
                  <button onClick={() => 刪除貓咪(貓咪.id)} className="delete-btn">刪除</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 貓咪個人檔案顯示 */}
      {顯示個人檔案 && 選取的貓咪 && (
        <section className="cat-profile-display">
          <h3>{選取的貓咪.名字}的個人檔案</h3>
          <div className="profile-display-content">
            <div className="profile-photo-section">
              {選取的貓咪.圖片 ? (
                <img src={選取的貓咪.圖片} alt={選取的貓咪.名字} className="profile-photo" />
              ) : (
                <div className="profile-photo-placeholder">📷 無照片</div>
              )}
            </div>
            <div className="profile-info-section">
              <div className="info-grid">
                <div className="info-item">
                  <strong>名字:</strong> {選取的貓咪.名字}
                </div>
                <div className="info-item">
                  <strong>出生年月日:</strong> {格式化日期(選取的貓咪)}
                </div>
                <div className="info-item">
                  <strong>出生地點:</strong> {選取的貓咪.出生地點 || '未設定'}
                </div>
                <div className="info-item">
                  <strong>顏色:</strong> {選取的貓咪.顏色 || '未設定'}
                </div>
                <div className="info-item">
                  <strong>個性:</strong> {選取的貓咪.個性 || '未設定'}
                </div>
                <div className="info-item">
                  <strong>性別:</strong> {選取的貓咪.性別 || '未設定'}
                </div>
                <div className="info-item">
                  <strong>眼珠顏色:</strong> {選取的貓咪.眼珠顏色 || '未設定'}
                </div>
              </div>
              {選取的貓咪.體重記錄 && 選取的貓咪.體重記錄.length > 0 && (
                <div className="weight-history-section">
                  <h4>體重記錄</h4>
                  <div className="weight-records-display">
                    {選取的貓咪.體重記錄.map(記錄 => (
                      <div key={記錄.id} className="weight-record-item">
                        {記錄.年 && 記錄.月 && 記錄.日 
                          ? `${記錄.年}年${記錄.月}月${記錄.日}日`
                          : 記錄.日期 || '無日期'
                        }: {記錄.體重} kg
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <button onClick={() => set顯示個人檔案(false)} className="close-profile-btn">關閉個人檔案</button>
        </section>
      )}

      <div className="profile-content">
        {/* 基本資訊區塊 */}
        <section className="profile-section">
          <h3>基本資訊</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="cat-name">貓咪名字</label>
              <input
                id="cat-name"
                type="text"
                value={貓咪資料.名字}
                onChange={(e) => 處理輸入變化('名字', e.target.value)}
                placeholder="輸入貓咪的名字"
                className="form-input"
              />
            </div>

            {/* 出生日期輸入 */}
            <div className="date-inputs-row">
              <div className="form-group">
                <label htmlFor="birth-year">出生年</label>
                <input
                  id="birth-year"
                  type="number"
                  min="1900"
                  max="2030"
                  value={貓咪資料.出生年}
                  onChange={(e) => 處理輸入變化('出生年', e.target.value)}
                  placeholder="2024"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="birth-month">出生月</label>
                <input
                  id="birth-month"
                  type="number"
                  min="1"
                  max="12"
                  value={貓咪資料.出生月}
                  onChange={(e) => 處理輸入變化('出生月', e.target.value)}
                  placeholder="3"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="birth-day">出生日</label>
                <input
                  id="birth-day"
                  type="number"
                  min="1"
                  max="31"
                  value={貓咪資料.出生日}
                  onChange={(e) => 處理輸入變化('出生日', e.target.value)}
                  placeholder="15"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="birth-place">出生地點</label>
              <input
                id="birth-place"
                type="text"
                value={貓咪資料.出生地點}
                onChange={(e) => 處理輸入變化('出生地點', e.target.value)}
                placeholder="輸入出生地點"
                className="form-input"
              />
            </div>
          </div>
        </section>

        {/* 貓咪圖片區塊 */}
        <section className="profile-section">
          <h3>貓咪照片</h3>
          <div className="photo-upload">
            <div className="photo-preview">
              {圖片預覽 ? (
                <img src={圖片預覽} alt="貓咪照片" className="cat-photo" />
              ) : (
                <div className="photo-placeholder">
                  <span>📷</span>
                  <p>尚未上傳照片</p>
                </div>
              )}
            </div>
            <div className="upload-controls">
              <input
                type="file"
                accept="image/*"
                onChange={處理圖片上傳}
                id="photo-upload"
                className="file-input"
              />
              <label htmlFor="photo-upload" className="upload-btn">
                選擇照片
              </label>
              <p className="upload-hint">支援 JPG、PNG 格式</p>
            </div>
          </div>
        </section>

        {/* 貓咪特徵區塊 */}
        <section className="profile-section">
          <h3>貓咪特徵</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="color">顏色</label>
              <select
                id="color"
                value={貓咪資料.顏色}
                onChange={(e) => 處理輸入變化('顏色', e.target.value)}
                className="form-select"
              >
                <option value="">選擇顏色</option>
                {顏色選項.map(顏色 => (
                  <option key={顏色} value={顏色}>{顏色}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="personality">個性</label>
              <select
                id="personality"
                value={貓咪資料.個性}
                onChange={(e) => 處理輸入變化('個性', e.target.value)}
                className="form-select"
              >
                <option value="">選擇個性</option>
                {個性選項.map(個性 => (
                  <option key={個性} value={個性}>{個性}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="gender">性別</label>
              <select
                id="gender"
                value={貓咪資料.性別}
                onChange={(e) => 處理輸入變化('性別', e.target.value)}
                className="form-select"
              >
                <option value="">選擇性別</option>
                {性別選項.map(性別 => (
                  <option key={性別} value={性別}>{性別}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="eye-color">眼珠顏色</label>
              <select
                id="eye-color"
                value={貓咪資料.眼珠顏色}
                onChange={(e) => 處理輸入變化('眼珠顏色', e.target.value)}
                className="form-select"
              >
                <option value="">選擇眼珠顏色</option>
                {眼珠顏色選項.map(顏色 => (
                  <option key={顏色} value={顏色}>{顏色}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* 體重記錄區塊 */}
        <section className="profile-section">
          <h3>體重記錄</h3>
          <div className="weight-records">
            <div className="add-weight-form">
              <div className="weight-input-row">
                <div className="form-group">
                  <label htmlFor="weight">體重 (kg)</label>
                  <input
                    id="weight"
                    type="number"
                    step="0.1"
                    value={新體重}
                    onChange={(e) => set新體重(e.target.value)}
                    placeholder="輸入體重"
                    className="form-input"
                  />
                </div>
                
                {/* 記錄日期輸入 */}
                <div className="date-inputs-row">
                  <div className="form-group">
                    <label htmlFor="record-year">記錄年</label>
                    <input
                      id="record-year"
                      type="number"
                      min="1900"
                      max="2030"
                      value={記錄年}
                      onChange={(e) => set記錄年(e.target.value)}
                      placeholder="2024"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="record-month">記錄月</label>
                    <input
                      id="record-month"
                      type="number"
                      min="1"
                      max="12"
                      value={記錄月}
                      onChange={(e) => set記錄月(e.target.value)}
                      placeholder="3"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="record-day">記錄日</label>
                    <input
                      id="record-day"
                      type="number"
                      min="1"
                      max="31"
                      value={記錄日}
                      onChange={(e) => set記錄日(e.target.value)}
                      placeholder="15"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>&nbsp;</label>
                  <button onClick={添加體重記錄} className="add-weight-btn">
                    添加記錄
                  </button>
                </div>
              </div>
            </div>

            <div className="weight-history">
              <h4>體重歷史記錄</h4>
              {體重記錄.length > 0 ? (
                <div className="weight-table">
                  <div className="table-header">
                    <span>日期</span>
                    <span>體重 (kg)</span>
                    <span>操作</span>
                  </div>
                  {體重記錄.map(記錄 => (
                    <div key={記錄.id} className="table-row">
                      <span>
                        {記錄.年 && 記錄.月 && 記錄.日 
                          ? `${記錄.年}年${記錄.月}月${記錄.日}日`
                          : 記錄.日期 || '無日期'
                        }
                      </span>
                      <span>{記錄.體重} kg</span>
                      <button 
                        onClick={() => 刪除體重記錄(記錄.id)}
                        className="delete-btn"
                      >
                        刪除
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-records">尚未有體重記錄</p>
              )}
            </div>
          </div>
        </section>

        {/* 儲存按鈕 */}
        <section className="profile-section">
          <div className="save-section">
            <button onClick={儲存貓咪資料} className="save-cat-btn">
              儲存貓咪資料
            </button>
            <p className="save-hint">儲存後可以在上方查看和管理您的貓咪</p>
          </div>
        </section>
      </div>
    </div>
  )
}

// 貓咪疾病管理元件
function 貓咪疾病管理() {           //貓咪疾病管理需要有疾病資料，疾病資料裡面我需要名稱、日期....
  const [疾病資料, set疾病資料] = useState({
    疾病名稱: '',
    疾病日期: '',
    治療費用: '',
    治療地點: '',
    過程天數: ''
  })
  const [病例清單, set病例清單] = useState([])    //有以上項目後，我還需要一個病例清單，來存放所有的病例資料
  //下面是儲存功能。
  useEffect(() => {         //useEffect功能是，因為我需要在元件載入時從localStorage中讀取之前儲存的病例資料，並將其設定到病例清單狀態中，這樣使用者就可以看到之前新增的病例記錄。
    const 儲存的病例 = localStorage.getItem('貓咪疾病病例')
    if (儲存的病例) {
      set病例清單(JSON.parse(儲存的病例))
    }
  }, [])
    //上面的主要是處理疾病資料的輸入和更新，當使用者在表單中輸入疾病相關資訊時，會呼叫處理疾病欄位函式來更新疾病資料的狀態，這樣就能確保疾病資料隨著使用者的輸入而即時更新。
    //下面是新增病例的功能，當使用者點擊新增病例按鈕時，會先驗證疾病資料是否完整，如果有缺少任何一個欄位，就會提示使用者填寫完整的資料；如果資料完整，則會創建一個新的病例物件，將其加入到病例清單中，並且更新localStorage以保存這些資料，最後重置疾病資料的狀態以便下一次輸入。
  const 處理疾病欄位 = (欄位, 值) => {
    set疾病資料(prev => ({ ...prev, [欄位]: 值 }))
  }
  //因為新增病例的功能需要驗證使用者是否填寫了完整的疾病資料，如果有缺少任何一個欄位，就會提示使用者填寫完整的資料，並且不會將不完整的病例新增到清單中；如果資料完整，則會創建一個新的病例物件，將其加入到病例清單中，並且更新localStorage以保存這些資料，最後重置疾病資料的狀態以便下一次輸入。
  const 新增病例 = () => {
    const { 疾病名稱, 疾病日期, 治療費用, 治療地點, 過程天數 } = 疾病資料
    if (!疾病名稱.trim() || !疾病日期 || !治療費用 || !治療地點.trim() || !過程天數) {
      alert('請填寫完整疾病病例各欄位')
      return
    }
      //我需要新病例用來存放使用者輸入的疾病資料，並且給它一個唯一的id（這裡使用Date.now()來生成），然後將這個新病例加入到病例清單中，最後更新localStorage以保存這些資料，並且重置疾病資料的狀態以便下一次輸入。
    const 新病例 = {
      id: Date.now(),
      疾病名稱: 疾病名稱.trim(),
      疾病日期,
      治療費用: parseFloat(治療費用),
      治療地點: 治療地點.trim(),
      過程天數: parseInt(過程天數, 10)
    }
    //我需要更新清單用來將新病例加入到病例清單中，這裡使用展開運算子（...）將新病例放在前面，這樣新增的病例就會顯示在列表的最前面；然後更新localStorage以保存這些資料，最後重置疾病資料的狀態以便下一次輸入。
    const 更新清單 = [新病例, ...病例清單]
    set病例清單(更新清單)
    localStorage.setItem('貓咪疾病病例', JSON.stringify(更新清單))
          //以下是localStorage的功能，當使用者新增一筆病例後，會將更新後的病例清單轉換成JSON字串並儲存在localStorage中，這樣即使使用者刷新頁面或重新訪問網站，也能夠看到之前新增的病例記錄。
    set疾病資料({
      疾病名稱: '',
      疾病日期: '',
      治療費用: '',
      治療地點: '',
      過程天數: ''
    })
  }
    //刪除病例的功能，當使用者點擊刪除按鈕時，會呼叫刪除病例函式，該函式會根據病例的id從病例清單中過濾掉要刪除的病例，然後更新病例清單的狀態，最後更新localStorage以保存這些變更，這樣使用者就能夠看到更新後的病例列表。
  const 刪除病例 = (id) => {
    const 更新清單 = 病例清單.filter(item => item.id !== id)
    set病例清單(更新清單)
    localStorage.setItem('貓咪疾病病例', JSON.stringify(更新清單))
  }

  return (
    <div className="disease-container">
      <h2>貓咪疾病記錄</h2>
      <p className="subtitle">新增與查看貓咪疾病病例（疾病名稱、日期、治療費用、地點、過程天數）</p>

      <section className="disease-records-section">
        <h3>已存病例</h3>
        {病例清單.length > 0 ? (
          <div className="disease-table">
            <div className="table-header">
              <span>疾病名稱</span>
              <span>日期</span>
              <span>治療費用</span>
              <span>治療地點</span>
              <span>過程天數</span>
              <span>操作</span>
            </div>
            {病例清單.map((病例) => (
              <div key={病例.id} className="table-row">
                <span>{病例.疾病名稱}</span>
                <span>{病例.疾病日期}</span>
                <span>{病例.治療費用}</span>
                <span>{病例.治療地點}</span>
                <span>{病例.過程天數}</span>
                <button className="delete-btn" onClick={() => 刪除病例(病例.id)}>刪除</button>
              </div>
            ))}
          </div>
        ) : (
          <p>尚未有疾病病例記錄，請新增第一筆。</p>
        )}
      </section>

      <section className="disease-form-section">
        <h3>新增病例</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>疾病名稱</label>
            <input
              type="text"
              value={疾病資料.疾病名稱}
              onChange={(e) => 處理疾病欄位('疾病名稱', e.target.value)}
              placeholder="輸入疾病名稱"
            />
          </div>

          <div className="form-group">
            <label>疾病日期</label>
            <input
              type="date"
              value={疾病資料.疾病日期}
              onChange={(e) => 處理疾病欄位('疾病日期', e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>治療費用</label>
            <input
              type="number"
              step="0.01"
              value={疾病資料.治療費用}
              onChange={(e) => 處理疾病欄位('治療費用', e.target.value)}
              placeholder="輸入費用"
            />
          </div>

          <div className="form-group">
            <label>治療地點</label>
            <input
              type="text"
              value={疾病資料.治療地點}
              onChange={(e) => 處理疾病欄位('治療地點', e.target.value)}
              placeholder="輸入治療地點"
            />
          </div>

          <div className="form-group">
            <label>過程天數</label>
            <input
              type="number"
              min="1"
              value={疾病資料.過程天數}
              onChange={(e) => 處理疾病欄位('過程天數', e.target.value)}
              placeholder="輸入療程天數"
            />
          </div>

          <div className="form-buttons">
            <button onClick={新增病例} className="add-record-btn">新增至記憶</button>
          </div>
        </div>
      </section>
    </div>
  )
}

// 人類貓咪年齡轉換器元件
function 貓咪餵食狀態() {
  const [餵食資料, set餵食資料] = useState({
    飼料品牌: '',
    今日總量: '',
    上午: '',
    下午: '',
    晚上: '',
    凌晨: '',
    日期: new Date().toISOString().slice(0,10)
  })
  const [餵食記錄, set餵食記錄] = useState([])

  useEffect(() => {
    const local = localStorage.getItem('貓咪餵食記錄')
    if (local) set餵食記錄(JSON.parse(local))
  }, [])

  const 處理餵食欄位 = (欄位, 值) => {
    set餵食資料(prev => ({ ...prev, [欄位]: 值 }))
  }

  const 新增餵食記錄 = () => {
    const { 飼料品牌, 今日總量, 上午, 下午, 晚上, 凌晨, 日期 } = 餵食資料
    if (!飼料品牌.trim() || !今日總量 || !上午 || !下午 || !晚上 || !凌晨 || !日期) {   
      alert('請填寫完整餵食記錄')
      return
    }
    const 新記錄 = {
      id: Date.now(),
      飼料品牌: 飼料品牌.trim(),
      今日總量: parseFloat(今日總量),
      上午: parseFloat(上午),
      下午: parseFloat(下午),
      晚上: parseFloat(晚上),
      凌晨: parseFloat(凌晨),
      日期
    }
    const 更新清單 = [新記錄, ...餵食記錄]
    set餵食記錄(更新清單)
    localStorage.setItem('貓咪餵食記錄', JSON.stringify(更新清單))

    set餵食資料({
      飼料品牌: '',
      今日總量: '',
      上午: '',
      下午: '',
      晚上: '',
      凌晨: '',
      日期: new Date().toISOString().slice(0,10)
    })
  }

  const 刪除餵食記錄 = (id) => {
    const 更新清單 = 餵食記錄.filter(rec => rec.id !== id)
    set餵食記錄(更新清單)
    localStorage.setItem('貓咪餵食記錄', JSON.stringify(更新清單))
  }

  return (
    <div className="feeding-container">
      <h2>貓咪餵食狀態</h2>
      <p className="subtitle">記錄今日餵食總量、各時段攝取與飼料品牌</p>

      <section className="feeding-records">
        <h3>餵食記錄</h3>
        {餵食記錄.length > 0 ? (
          <div className="table-wrapper">
            <div className="feeding-table">
              <div className="table-header">
                <span>日期</span>
                <span>品牌</span>
                <span>今天總量(g)</span>
                <span>上午(g)</span>
                <span>下午(g)</span>
                <span>晚上(g)</span>
                <span>凌晨(g)</span>
                <span>操作</span>
              </div>
              {餵食記錄.map(rec => (
                <div key={rec.id} className="table-row">
                  <span>{rec.日期}</span>
                  <span>{rec.飼料品牌}</span>
                  <span>{rec.今日總量}</span>
                  <span>{rec.上午}</span>
                  <span>{rec.下午}</span>
                  <span>{rec.晚上}</span>
                  <span>{rec.凌晨}</span>
                  <button className="delete-btn" onClick={() => 刪除餵食記錄(rec.id)}>刪除</button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>目前沒有餵食記錄，請新增一筆。</p>
        )}
      </section>

      <section className="feeding-form">
        <h3>新增餵食</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>飼料品牌</label>
            <input value={餵食資料.飼料品牌} onChange={e => 處理餵食欄位('飼料品牌', e.target.value)} placeholder="輸入飼料品牌" />
          </div>
          <div className="form-group">
            <label>日期</label>
            <input type="date" value={餵食資料.日期} onChange={e => 處理餵食欄位('日期', e.target.value)} />
          </div>
          <div className="form-group">
            <label>今天總量 (g)</label>
            <input type="number" value={餵食資料.今日總量} onChange={e => 處理餵食欄位('今日總量', e.target.value)} placeholder="總餵食量" />
          </div>
          <div className="form-group">
            <label>上午 (g)</label>
            <input type="number" value={餵食資料.上午} onChange={e => 處理餵食欄位('上午', e.target.value)} placeholder="上午餵食量" />
          </div>
          <div className="form-group">
            <label>下午 (g)</label>
            <input type="number" value={餵食資料.下午} onChange={e => 處理餵食欄位('下午', e.target.value)} placeholder="下午餵食量" />
          </div>
          <div className="form-group">
            <label>晚上 (g)</label>
            <input type="number" value={餵食資料.晚上} onChange={e => 處理餵食欄位('晚上', e.target.value)} placeholder="晚上餵食量" />
          </div>
          <div className="form-group">
            <label>凌晨 (g)</label>
            <input type="number" value={餵食資料.凌晨} onChange={e => 處理餵食欄位('凌晨', e.target.value)} placeholder="凌晨餵食量" />
          </div>

          <div className="form-buttons">
            <button onClick={新增餵食記錄} className="add-record-btn">新增至記憶</button>
          </div>
        </div>
      </section>
    </div>
  )
}

// 寵物品種搜尋器元件
function 寵物品種搜尋器() {
  const [搜尋詞, set搜尋詞] = useState('')
  const [貓咪品種資料, set貓咪品種資料] = useState([])
  const [載入中, set載入中] = useState(true)
  const [錯誤訊息, set錯誤訊息] = useState('')
  const [翻譯狀態, set翻譯狀態] = useState({}) // 儲存每個品種卡片的翻譯狀態

  // 翻譯函數：使用 Google Translate API 將英文轉成繁體中文
  const 翻譯內容 = async (id, description, origin, temperament) => {
    if (翻譯狀態[id]?.isTranslated) return; // 如果已經翻譯過，跳過
    
    try {
      const [descRes, originRes, tempRes] = await Promise.all([
        fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${encodeURIComponent(description)}`),
        fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${encodeURIComponent(origin)}`),
        fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=zh-TW&dt=t&q=${encodeURIComponent(temperament)}`)
      ]);

      const [descData, originData, tempData] = await Promise.all([
        descRes.json(),
        originRes.json(),
        tempRes.json()
      ]);

      set翻譯狀態(prev => ({ ...prev, [id]: { 
        isTranslated: true, 
        translated: {
          description: descData[0][0][0],
          origin: originData[0][0][0],
          temperament: tempData[0][0][0]
        }
      } }));
    } catch (error) {
      console.error('翻譯失敗:', error);
      alert('翻譯失敗，請稍後再試');
    }
  }

  const API_KEY = 'live_TRqaBDp7AmJDhFSx3444HGdOOdY3jwDkn38x8Cd4zN13qO2f0uNaPS3V0tqEMzuh'
  const API_URL = 'https://api.thecatapi.com/v1/breeds'

  // 載入貓咪品種數據
  useEffect(() => {
    const 載入數據 = async () => {
      try {
        set載入中(true)
        set錯誤訊息('')
        
        const response = await fetch(`${API_URL}?limit=100`, {
          headers: {
            'x-api-key': API_KEY
          }
        })

        if (!response.ok) {
          throw new Error(`API 錯誤: ${response.status}`)
        }

        const data = await response.json()
        
        // 轉換 API 數據為應用程式需要的格式
        const 轉換的資料 = data.map(品種 => ({
          id: 品種.id,
          品種: 品種.name,
          分類: '貓咪',
          特徵: 品種.temperament || '未提供',
          壽命: 品種.life_span ? `${品種.life_span}年` : '未提供',
          體重: 品種.weight ? `${品種.weight.metric}公斤` : '未提供',
          描述: 品種.description || '暫無描述',
          圖片: 品種.image?.url || null,
          原產地: 品種.origin || '未提供',
          性格值: {
            適應力: 品種.adaptability || 0,
            親人程度: 品種.affection_level || 0,
            兒童友善: 品種.child_friendly || 0,
            狗友善: 品種.dog_friendly || 0,
            能量: 品種.energy_level || 0,
            梳毛: 品種.grooming || 0,
            智力: 品種.intelligence || 0
          }
        }))

        set貓咪品種資料(轉換的資料)
        set載入中(false)
      } catch (error) {
        console.error('載入數據時出錯:', error)
        set錯誤訊息(`無法載入貓咪品種數據: ${error.message}`)
        set載入中(false)
      }
    }

    載入數據()
  }, [])
      //下面是確保搜尋功能能夠同時檢查品種名稱、特徵、描述和原產地等多個欄位，並且不區分大小寫，這樣使用者就能夠更靈活地搜尋到符合條件的貓咪品種。
  const 篩選結果 = 搜尋詞
    ? 貓咪品種資料.filter(
        (寵物) =>
          寵物.品種.toLowerCase().includes(搜尋詞.toLowerCase()) ||
          寵物.特徵.toLowerCase().includes(搜尋詞.toLowerCase()) ||
          寵物.描述.toLowerCase().includes(搜尋詞.toLowerCase()) ||
          寵物.原產地.toLowerCase().includes(搜尋詞.toLowerCase())
      )
    : 貓咪品種資料

  // 渲染星號評分，抓取性格值中的適應力、親人程度、能量和智力等指標，將其轉換為星號表示，這樣使用者就能夠直觀地看到每個品種在這些方面的評分。值=0-5，四捨五入後轉換為對應數量的星號，如果沒有數據則顯示「無數據」。這樣可以讓使用者更容易理解和比較不同品種的特性。
  const 渲染評分 = (值) => {
    const 星數 = Math.round(值)
    return '⭐'.repeat(星數) || '無數據'
  }

  return (
    <div className="breed-finder-container">
      <div className="breed-finder-header">
        <h2>貓咪品種搜尋器</h2>
        <p className="breed-finder-subtitle">探索來自全世界各種貓咪品種的信息</p>
      </div>

      <div className="breed-finder-search">
        <input
          type="text"
          placeholder="搜尋貓咪品種、特徵或原產地..."
          value={搜尋詞}
          onChange={(e) => set搜尋詞(e.target.value)}
          className="search-input"
          disabled={載入中}
        />
        <span className="search-icon">🔍</span>
      </div>

      {載入中 && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>正在載入貓咪品種數據...</p>
        </div>
      )}

      {錯誤訊息 && (
        <div className="error-message-box">
          <p>{錯誤訊息}</p>
        </div>
      )}

      {!載入中 && (
        <>
          <div className="search-results-info">
            <p>共有 {篩選結果.length} 種貓咪品種 {搜尋詞 && `(符合: "${搜尋詞}")`}</p>
          </div>

          <div className="breed-finder-grid">
            {篩選結果.length > 0 ? (
              篩選結果.map((貓咪) => (
                <article key={貓咪.id} className="breed-card">
                  {貓咪.圖片 && (
                    <div className="breed-card-image">
                      <img src={貓咪.圖片} alt={貓咪.品種} />
                    </div>
                  )}
                  <div className="breed-card-header">
                    <h3>{貓咪.品種}</h3>
                    <span className="breed-category">{貓咪.分類}</span>
                  </div>
                  <div className="breed-card-content">
                    <p className="breed-description">{翻譯狀態[貓咪.id]?.isTranslated ? 翻譯狀態[貓咪.id].translated.description : 貓咪.描述}</p>
                    <button onClick={() => 翻譯內容(貓咪.id, 貓咪.描述, 貓咪.原產地, 貓咪.特徵)} className="translate-btn" disabled={翻譯狀態[貓咪.id]?.isTranslated}>
                      {翻譯狀態[貓咪.id]?.isTranslated ? '已翻譯' : '翻譯成繁體中文'}
                    </button>
                    <div className="breed-details">
                      <div className="detail-item">
                        <strong>🌍 原產地:</strong>
                        <p>{翻譯狀態[貓咪.id]?.isTranslated ? 翻譯狀態[貓咪.id].translated.origin : 貓咪.原產地}</p>
                      </div>
                      <div className="detail-item">
                        <strong>📋 性格特徵:</strong>
                        <p>{翻譯狀態[貓咪.id]?.isTranslated ? 翻譯狀態[貓咪.id].translated.temperament : 貓咪.特徵}</p>
                      </div>
                      <div className="detail-row">
                        <div className="detail-item">
                          <strong>⏱️ 壽命:</strong>
                          <p>{貓咪.壽命}</p>
                        </div>
                        <div className="detail-item">
                          <strong>⚖️ 體重:</strong>
                          <p>{貓咪.體重}</p>
                        </div>
                      </div>
                      <div className="personality-scores">
                        <div className="score-item">
                          <span>適應力</span>
                          <div>{渲染評分(貓咪.性格值.適應力)}</div>
                        </div>
                        <div className="score-item">
                          <span>親人程度</span>
                          <div>{渲染評分(貓咪.性格值.親人程度)}</div>
                        </div>
                        <div className="score-item">
                          <span>能量</span>
                          <div>{渲染評分(貓咪.性格值.能量)}</div>
                        </div>
                        <div className="score-item">
                          <span>智力</span>
                          <div>{渲染評分(貓咪.性格值.智力)}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-results">
                <p>未找到符合搜尋條件的貓咪品種，請嘗試其他搜尋詞彙</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function 人類貓咪計算轉換器() {
  const [人類年齡, set人類年齡] = useState('')
  const [貓咪年齡, set貓咪年齡] = useState('')

  const 計算貓咪年齡 = () => {
    const 人類年齡數字 = parseFloat(人類年齡)
    if (isNaN(人類年齡數字)) {
      set貓咪年齡('請輸入有效的數字')
      return
    }
    const 計算結果 = 人類年齡數字 * 7
    set貓咪年齡(計算結果.toString())
  }

  return (
    <div className="converter-container">
      <div className="converter-card">
        <h2>人類貓咪年齡計算轉換器</h2>
        <p className="converter-description">將人類年齡轉換為貓咪年齡（1歲人類年齡 = 7歲貓咪年齡）</p>
        
        <div className="converter-form">
          <div className="input-group">
            <label htmlFor="human-age">人類年齡</label>
            <input
              id="human-age"
              type="number"
              placeholder="請輸入人類年齡"
              value={人類年齡}
              onChange={(e) => set人類年齡(e.target.value)}
              className="age-input"
            />
          </div>

          <button onClick={計算貓咪年齡} className="calculate-btn">計算轉換</button>

          {貓咪年齡 && (
            <div className="result-group">
              <label>貓咪年齡</label>
              <div className="result-display">
                {isNaN(parseFloat(貓咪年齡)) ? (
                  <p className="error-message">{貓咪年齡}</p>
                ) : (
                  <p className="result-value">{貓咪年齡} 歲</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const 導航菜單 = [
    { id: 'breed-finder', label: '寵物品種搜尋器' },
    { id: 'my-cat', label: '我的貓咪' },
    { id: 'feeding-status', label: '貓咪餵食時間狀態' },
    { id: 'disease-status', label: '貓咪疾病狀態' },
    { id: 'cat-encyclopedia', label: '貓咪百科全書' },
    { id: 'cat-age-calculator', label: '人類貓咪計算轉換器' },
  ]

  return (
    <div className="app-container">
      <aside className="sidebar">
        <nav className="nav-menu">
          <h2 className="menu-title">貓咪助手</h2>
          <ul className="menu-list">
            {導航菜單.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className={`menu-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => setCurrentPage(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        {currentPage === 'home' && <我的貓咪 />}
        {currentPage === 'breed-finder' && <寵物品種搜尋器 />}
        {currentPage === 'my-cat' && <我的貓咪 />}
        {currentPage === 'feeding-status' && <貓咪餵食狀態 />}
        {currentPage === 'disease-status' && <貓咪疾病管理 />}
        {currentPage === 'cat-encyclopedia' && <貓咪百科全書 />}
        {currentPage === 'cat-age-calculator' && <人類貓咪計算轉換器 />}
      </main>
    </div>
  )
}

export default App