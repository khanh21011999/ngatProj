import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaUniversity, FaArrowUp } from 'react-icons/fa'

const FooterContainer = styled.footer`
  position: relative;
  background: linear-gradient(135deg, #1e3a8a, #7e22ce);
  color: white;
  padding: 5rem 2rem 3rem;
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
    z-index: 0;
  }
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
  background: linear-gradient(45deg, rgba(245, 158, 11, 0.2), rgba(139, 92, 246, 0.2));
  filter: blur(15px);
`

const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`

const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FooterText = styled(motion.p)`
  color: #cbd5e1;
  line-height: 1.8;
  font-size: 1rem;
`

const FooterLogo = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
`

const Divider = styled(motion.div)`
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
  margin: 2rem 0;
  grid-column: 1 / -1;
`

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  grid-column: 1 / -1;
`

const FooterQuote = styled(motion.p)`
  font-style: italic;
  color: #cbd5e1;
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.8;
  position: relative;
  
  &::before, &::after {
    content: '"';
    font-size: 2rem;
    color: rgba(245, 158, 11, 0.5);
    position: absolute;
  }
  
  &::before {
    top: -10px;
    left: -15px;
  }
  
  &::after {
    bottom: -30px;
    right: -15px;
  }
`

const ScrollToTop = styled(motion.button)`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #f59e0b, #d97706);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
  z-index: 10;
  
  &:hover {
    background: linear-gradient(45deg, #d97706, #b45309);
  }
`

export default function Footer() {
  const shapes = [
    { size: 120, x: "10%", y: "20%", duration: 25 },
    { size: 80, x: "85%", y: "15%", duration: 30 },
    { size: 150, x: "70%", y: "80%", duration: 35 },
    { size: 100, x: "20%", y: "70%", duration: 28 }
  ]
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <FooterContainer>
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
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </ShapesContainer>
      
      <Container>
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FooterLogo
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FaUniversity /> ULIS
          </FooterLogo>
          <FooterText>
            Trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội
          </FooterText>
          <FooterText>
            Chiến dịch "21 Ngày, Cơ Thể Mới" được tổ chức với mục tiêu nâng cao sức khỏe thể chất và tinh thần cho sinh viên.
          </FooterText>
        </FooterSection>

        <Divider
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <BottomSection>
          <FooterQuote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mỗi bước chân là một bước gần hơn tới phiên bản tốt nhất của bạn.
          </FooterQuote>
         
        </BottomSection>
      </Container>
      
      <ScrollToTop
        onClick={scrollToTop}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <FaArrowUp />
      </ScrollToTop>
    </FooterContainer>
  )
}
