import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaGraduationCap, FaHeartbeat, FaBuilding, FaClock } from 'react-icons/fa'

const Section = styled.section`
  padding: 7rem 2rem;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.75rem;
  font-weight: 800;
  color: #1e293b;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 3rem;
  }
`

const QuoteContainer = styled(motion.div)`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 3rem 2.5rem 2.5rem;
  border-radius: 1.5rem;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(226, 232, 240, 0.8);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  }
`

const QuoteIcon = styled(FaQuoteLeft)`
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  color: rgba(99, 102, 241, 0.15);
  font-size: 2rem;
  z-index: 1;
`

const QuoteText = styled.p`
  font-size: 1.35rem;
  line-height: 1.7;
  margin-bottom: 1.25rem;
  font-style: italic;
  position: relative;
  z-index: 2;
  color: #334155;
  font-weight: 500;
`

const QuoteSource = styled.p`
  font-weight: 700;
  color: #6366f1;
  font-size: 1.1rem;
`

const QuoteDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, rgba(226, 232, 240, 0) 0%, rgba(226, 232, 240, 1) 50%, rgba(226, 232, 240, 0) 100%);
  margin: 2.5rem 0;
`

const Illustration = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`

const Item = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background: white;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(241, 245, 249, 0.8);

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px);
  }
`

const ItemIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
`

const ItemText = styled.div`
  font-size: 1.1rem;
  color: #475569;
  line-height: 1.6;
  
  strong {
    color: #1e293b;
    font-weight: 700;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 0.25rem;
  }
`

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
}

const slideLeft = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
}

export default function WhyItMatters() {
  return (
    <Section id="why-it-matters">
      <SectionTitle
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideUp}
        transition={{ duration: 0.7 }}
      >
        Tại Sao Thể Lực Quan Trọng?
      </SectionTitle>
      
      <Container>
        <QuoteContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRight}
          transition={{ duration: 0.7 }}
        >
          <QuoteIcon />
          <QuoteText>
            "Một dân tộc dốt là một dân tộc yếu. Phải làm cho dân tộc ta trở nên một dân tộc thông thái, một dân tộc mạnh về thể chất lẫn tinh thần."
          </QuoteText>
          <QuoteSource>- Hồ Chí Minh</QuoteSource>
          
          <QuoteDivider />
          
          <QuoteIcon />
          <QuoteText>
            "Công dân có quyền được bảo vệ sức khỏe, có nghĩa vụ thực hiện các quy định về vệ sinh phòng bệnh."
          </QuoteText>
          <QuoteSource>- Điều 37, Hiến pháp 2013</QuoteSource>
        </QuoteContainer>

        <Illustration
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <Item
            variants={slideLeft}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <ItemIcon>
              <FaGraduationCap size={20} />
            </ItemIcon>
            <ItemText>
              <strong>Nâng cao học tập</strong>
              33.6% SV tự giác tập luyện, chỉ 38.9% hoàn thành 2 giờ tự học TDTT theo quy định
            </ItemText>
          </Item>
          <Item
            variants={slideLeft}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <ItemIcon>
              <FaHeartbeat size={20} />
            </ItemIcon>
            <ItemText>
              <strong>Giảm căng thẳng</strong>
              18.5% SV chưa hài lòng với hoạt động TDTT hiện tại, cần giải pháp mới
            </ItemText>
          </Item>
          <Item
            variants={slideLeft}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
          >
            <ItemIcon>
              <FaBuilding size={20} />
            </ItemIcon>
            <ItemText>
              <strong>Thiếu cơ sở vật chất</strong>
              38% SV cho rằng đây là rào cản chính trong tập luyện
            </ItemText>
          </Item>
          <Item
            variants={slideLeft}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <ItemIcon>
              <FaClock size={20} />
            </ItemIcon>
            <ItemText>
              <strong>Thiếu thời gian</strong>
              36% SV không có đủ thời gian cho hoạt động thể chất
            </ItemText>
          </Item>
        </Illustration>
      </Container>
    </Section>
  )
}
