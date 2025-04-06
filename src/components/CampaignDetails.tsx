import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaHeartbeat, FaRunning, FaMedal } from 'react-icons/fa'

const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
               radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.03) 0%, transparent 50%);
    z-index: 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #6366f1;
  font-weight: 600;
  margin-bottom: 1rem;
`

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`

const Description = styled(motion.p)`
  max-width: 650px;
  margin: 0 auto;
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.6;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    z-index: 1;
  }
  
  &:nth-child(1)::before {
    background: linear-gradient(90deg, #6366f1, #818cf8);
  }
  
  &:nth-child(2)::before {
    background: linear-gradient(90deg, #8b5cf6, #a78bfa);
  }
  
  &:nth-child(3)::before {
    background: linear-gradient(90deg, #d946ef, #e879f9);
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const CardIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin-right: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`

const CardContent = styled.div`
  color: #64748b;
  line-height: 1.8;
`

const List = styled.ul`
  padding-left: 0;
  list-style-position: inside;
`

const ListItem = styled(motion.li)`
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #6366f1;
    font-weight: bold;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
}

const listVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
}

export default function CampaignDetails() {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Subtitle
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Thay đổi cuộc sống
          </Subtitle>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Chiến Dịch 21 Ngày, Cơ Thể Mới
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hành trình 21 ngày để xây dựng thói quen lành mạnh, cải thiện sức khỏe và tạo nên phiên bản tốt nhất của bạn.
          </Description>
        </TitleWrapper>

        <Cards>
          <Card
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 }
            }}
          >
            <CardHeader>
              <CardIcon style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)' }}>
                <FaHeartbeat />
              </CardIcon>
              <CardTitle>Lợi ích vận động</CardTitle>
            </CardHeader>
            <CardContent>
              <List>
                {[
                  'Cải thiện sức khỏe thể chất và tinh thần',
                  'Tăng cường năng lượng và khả năng tập trung',
                  'Giảm căng thẳng, lo âu trong học tập',
                  'Hình thành thói quen lành mạnh bền vững',
                  'Đáp ứng tiêu chí "Sinh viên 5 tốt" về thể lực'
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    custom={index}
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          <Card
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 }
            }}
          >
            <CardHeader>
              <CardIcon style={{ background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)' }}>
                <FaRunning />
              </CardIcon>
              <CardTitle>Lộ trình 21 ngày</CardTitle>
            </CardHeader>
            <CardContent>
              <List>
                {[
                  'Khởi động: Hướng dẫn bài tập phù hợp',
                  '21 ngày: Bài tập đa dạng mỗi ngày (đi bộ, yoga, chạy bộ...)',
                  'Cộng đồng: Group hỗ trợ, chia sẻ tiến độ',
                  'Theo dõi: Bảng tiến độ, sticker khen thưởng',
                  'Kết thúc: Tổng kết và khuyến khích duy trì'
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    custom={index}
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          <Card
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 }
            }}
          >
            <CardHeader>
              <CardIcon style={{ background: 'linear-gradient(135deg, #d946ef, #e879f9)' }}>
                <FaMedal />
              </CardIcon>
              <CardTitle>Kết quả mong đợi</CardTitle>
            </CardHeader>
            <CardContent>
              <List>
                {[
                  '1000+ sinh viên tham gia',
                  '80% duy trì thói quen sau 21 ngày',
                  'Cải thiện 20% chỉ số thể lực',
                  'Giảm 30% cảm giác căng thẳng',
                  'Xây dựng cộng đồng 500+ thành viên'
                ].map((item, index) => (
                  <ListItem
                    key={index}
                    custom={index}
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Cards>
      </Container>
    </Section>
  )
}
