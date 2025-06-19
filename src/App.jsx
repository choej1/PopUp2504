import { useState } from 'react'
import { ChevronLeft, ChevronRight, Globe, Languages } from 'lucide-react'
import './App.css'

// 이미지 import
import logo from './assets/Logo.png'
import ko01 from './assets/스크럽대디_성과지표_KO_01.jpg'
import ko02 from './assets/스크럽대디_성과지표_KO_02.jpg'
import ko03 from './assets/스크럽대디_성과지표_KO_03.jpg'
import ko04 from './assets/스크럽대디_성과지표_KO_04.jpg'
import ko05 from './assets/스크럽대디_성과지표_KO_05.jpg'
import ko06 from './assets/스크럽대디_성과지표_KO_06.jpg'
import en01 from './assets/스크럽대디_성과지표_EN_01.jpg'
import en02 from './assets/스크럽대디_성과지표_EN_02.jpg'
import en03 from './assets/스크럽대디_성과지표_EN_03.jpg'
import en04 from './assets/스크럽대디_성과지표_EN_04.jpg'
import en05 from './assets/스크럽대디_성과지표_EN_05.jpg'
import en06 from './assets/스크럽대디_성과지표_EN_06.jpg'

const images = {
  ko: [ko01, ko02, ko03, ko04, ko05, ko06],
  en: [en01, en02, en03, en04, en05, en06]
}

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language)
    setCurrentImageIndex(0)
  }

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images[selectedLanguage].length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      prev === images[selectedLanguage].length - 1 ? 0 : prev + 1
    )
  }

  const handleImageClick = (e) => {
    // 05번 이미지(인덱스 4)에서 클릭 영역 확인
    if (currentImageIndex === 4) {
      const rect = e.target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const imageWidth = rect.width
      const imageHeight = rect.height
      
      // 하단 중앙 영역 클릭 감지 (Click Here 버튼 영역)
      const clickAreaX = imageWidth * 0.2 // 좌측 20%부터
      const clickAreaWidth = imageWidth * 0.6 // 60% 너비
      const clickAreaY = imageHeight * 0.85 // 상단 85%부터
      const clickAreaHeight = imageHeight * 0.15 // 15% 높이
      
      if (x >= clickAreaX && x <= clickAreaX + clickAreaWidth &&
          y >= clickAreaY && y <= clickAreaY + clickAreaHeight) {
        window.open('https://bit.ly/scrubdaddystory01', '_blank')
      }
    }
  }

  const handleBackToLanguageSelect = () => {
    setSelectedLanguage(null)
    setCurrentImageIndex(0)
  }

  if (!selectedLanguage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-8">
            <img src={logo} alt="Scrub Daddy Logo" className="h-16 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
  팝업스토어 성과 자료 @더현대 서울
</h1>
<h2 className="text-lg font-medium text-gray-600 mb-4">
  Pop-up Store Performance @The Hyundai Seoul
</h2>
            <p className="text-gray-600">
              언어를 선택해주세요
            </p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => handleLanguageSelect('ko')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Languages className="w-5 h-5" />
              한국어
            </button>
            
            <button
              onClick={() => handleLanguageSelect('en')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Languages className="w-5 h-5" />
              English
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 image-viewer">
      {/* 헤더 */}
      <div className="bg-white shadow-sm p-4 flex items-center justify-between">
        <button
          onClick={handleBackToLanguageSelect}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          언어 선택, Select language
        </button>
        
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {currentImageIndex + 1} / {images[selectedLanguage].length}
          </span>
        </div>
      </div>

      {/* 이미지 뷰어 */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="relative max-w-4xl w-full">
          {/* 이전 버튼 */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* 이미지 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={images[selectedLanguage][currentImageIndex]}
              alt={`성과 자료 ${currentImageIndex + 1}`}
              className="w-full h-auto cursor-pointer"
              onClick={handleImageClick}
            />
          </div>

          {/* 다음 버튼 */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* 05번 이미지일 때 클릭 영역 - 테두리 제거, 클릭 기능만 유지 */}
          {currentImageIndex === 4 && (
            <div 
              className={`absolute bottom-[3%] h-[6%] cursor-pointer ${
                selectedLanguage === 'ko' 
                  ? 'left-[5%] w-[45%]' 
                  : 'left-[8%] w-[42%]'
              }`}
              onClick={() => window.open('https://bit.ly/scrubdaddystory01', '_blank')}
            >
              {/* 투명한 클릭 영역 */}
            </div>
          )}
        </div>
      </div>

      {/* 하단 네비게이션 도트 */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
        {images[selectedLanguage].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImageIndex 
                ? 'bg-orange-500 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default App

