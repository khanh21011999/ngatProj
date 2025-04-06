import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaUsers, FaFacebook } from 'react-icons/fa'

const Section = styled.section`
  padding: 7rem 2rem;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled(motion.h2)`
  font-size: 2.75rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #64748b;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const CommunityCard = styled(motion.div)`
  background: white;
  border-radius: 1.5rem;
  padding: 3rem 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(226, 232, 240, 0.8);
  position: relative;
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

const CommunityTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1e293b;
  text-align: center;
`

const CommunityIcon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
`

const CommunityText = styled.p`
  color: #475569;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`


const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #3b5998, #4c6ef5);
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 4px 15px rgba(59, 89, 152, 0.4);
  transition: all 0.3s ease;
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
  
  &:hover::before {
    left: 100%;
  }
`


const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
}


export default function Community() {
  return (
    <Section>
      <Container>
        <Title
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ duration: 0.7 }}
        >
          Cùng nhau khỏe mạnh
        </Title>
        
        <Subtitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Hành trình 21 ngày sẽ trở nên dễ dàng hơn khi bạn không đi một mình. Tham gia cộng đồng để được hỗ trợ và chia sẻ thành công.
        </Subtitle>

        <Content>
          <CommunityCard
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            transition={{ duration: 0.7 }}
          >
            <CommunityIcon>
              <FaUsers />
            </CommunityIcon>
            <CommunityTitle>
              Tham gia cộng đồng
            </CommunityTitle>
            <CommunityText>
              Kết nối với hàng ngàn sinh viên khác đang trên hành trình 21 ngày thay đổi bản thân. Chia sẻ kinh nghiệm, động viên nhau và cùng nhau vượt qua thử thách.
            </CommunityText>
            
            <CTAButton
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook /> Tham gia nhóm Facebook
            </CTAButton>
          </CommunityCard>
        </Content>
      </Container>
    </Section>
  )
}
