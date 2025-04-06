import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const HeroContainer = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e3a8a, #7e22ce);
  color: white;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%);
    z-index: -1;
  }
`

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  opacity: 0.3;
  filter: contrast(1.1) saturate(1.2);
`

const Content = styled.div`
  text-align: center;
  padding: 0 2rem;
  max-width: 800px;
  position: relative;
  z-index: 1;
`

const ShapesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`

const Shape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(245, 158, 11, 0.3), rgba(139, 92, 246, 0.3));
  filter: blur(15px);
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  width: 100%;
`

const MainTitle = styled(motion.h1)`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: left;
  background: linear-gradient(to right, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`

const SubtitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

const StaticText = styled.span`
  font-size: 3.5rem;
  font-weight: 800;
  margin-right: 0.5rem;
  white-space: nowrap;
`

const AnimatedTextContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  height: 4.5rem;
  min-width: 100rem;
`

const AnimatedText = styled(motion.span)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 800;
  font-size: 3.5rem;
  color: #f59e0b;
  white-space: nowrap;
  text-shadow: 0 0 15px rgba(245, 158, 11, 0.5);
  background: linear-gradient(to right, #f59e0b, #fbbf24);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Description = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const CTAButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background: linear-gradient(45deg, #f59e0b, #d97706);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    background: linear-gradient(45deg, #d97706, #b45309);
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(245, 158, 11, 0.5);
    
    &::before {
      left: 100%;
    }
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const animatedTexts = ["giúp đỡ mọi người", "tự tin", "thành công!", "có người iu :)"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [animatedTexts.length]);
  
  const shapes = [
    { size: 150, x: "10%", y: "20%", duration: 20 },
    { size: 100, x: "85%", y: "15%", duration: 25 },
    { size: 200, x: "70%", y: "80%", duration: 30 },
    { size: 120, x: "20%", y: "70%", duration: 22 }
  ];
  
  const slideVariants = {
    enter: { y: 80, opacity: 0, scale: 0.95 },
    center: { y: 0, opacity: 1, scale: 1 },
    exit: { y: -80, opacity: 0, scale: 0.95 }
  };

  return (
    <HeroContainer>
      <VideoBackground autoPlay loop muted playsInline>
        <source src="/videos/hero.mp4" type="video/mp4" />
      </VideoBackground>
      
      <ShapesContainer>
        {shapes.map((shape, index) => (
          <Shape
            key={index}
            style={{
              width: shape.size,
              height: shape.size,
              left: shape.x,
              top: shape.y
            }}
            animate={{
              x: [20, -20, 20],
              y: [20, -20, 20],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </ShapesContainer>
      
      <Content>
        <TitleContainer>
          <MainTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            21 Ngày
          </MainTitle>
          <SubtitleRow>
            <StaticText>Khỏe để</StaticText>
            <AnimatedTextContainer>
              <AnimatePresence mode="wait">
                <AnimatedText
                  key={currentTextIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {animatedTexts[currentTextIndex]}
                </AnimatedText>
              </AnimatePresence>
            </AnimatedTextContainer>
          </SubtitleRow>
        </TitleContainer>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hành trình 21 ngày thay đổi thể chất và tinh thần của bạn.
        </Description>
        <CTAButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={() => {
            document.getElementById('progress-tracker')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Tham Gia Ngay
        </CTAButton>
      </Content>

      <ScrollIndicator
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={() => {
          document.getElementById('why-it-matters')?.scrollIntoView({ behavior: 'smooth' })
        }}
        style={{ cursor: 'pointer' }}
      >
        <FaChevronDown size={24} />
      </ScrollIndicator>
    </HeroContainer>
  )
}
