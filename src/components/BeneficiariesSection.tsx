import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaRunning, FaUsers, FaArrowRight } from 'react-icons/fa'
import styled from 'styled-components'

const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(to bottom, #ffffff, #f8fafc);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.03) 0%, transparent 50%);
    z-index: 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const HeaderContainer = styled.div`
  margin-bottom: 4rem;
  position: relative;
`

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #1e293b;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #6366f1, #8b5cf6);
    border-radius: 2px;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #64748b;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
`

const BeneficiariesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  margin-bottom: 5rem;
`

const BeneficiaryCard = styled(motion.div)`
  background: white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(226, 232, 240, 0.8);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: linear-gradient(to right, #6366f1, #8b5cf6);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: scaleX(1);
    }
  }
`

const CardIconWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`

const CardIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
`

const CardContent = styled.p`
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1.05rem;
`

const CardList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  
  li {
    position: relative;
    padding-left: 1.75rem;
    margin-bottom: 0.75rem;
    color: #475569;
    line-height: 1.6;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: #6366f1;
    }
  }
`

const ExpectedChanges = styled(motion.div)`
  background: white;
  border-radius: 2rem;
  padding: 3rem;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(226, 232, 240, 0.8);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 10% 10%, rgba(99, 102, 241, 0.03) 0%, transparent 30%),
      radial-gradient(circle at 90% 90%, rgba(139, 92, 246, 0.03) 0%, transparent 30%);
    z-index: 0;
  }
`

const ChangesHeader = styled.div`
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
`

const ChangesTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1e293b;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #6366f1, #8b5cf6);
    border-radius: 1.5px;
  }
`

const ChangesDescription = styled.p`
  text-align: center;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
  font-size: 1.1rem;
`

const ChangesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
`

const ChangeItem = styled(motion.div)`
  background: rgba(248, 250, 252, 0.8);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }
`

const ChangeItemTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ChangeItemIcon = styled.span`
  color: #6366f1;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
`

const ChangeItemContent = styled.p`
  color: #64748b;
  line-height: 1.7;
  font-size: 1.05rem;
`

const LearnMoreButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: #6366f1;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #4f46e5;
    gap: 0.75rem;
  }
`

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

const changeItemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1]
    }
  })
};

export default function BeneficiariesSection() {
  return (
    <Section id="beneficiaries">
      <Container>
        <HeaderContainer>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Đối Tượng Hưởng Lợi
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
          >
            Chiến dịch 21 ngày vận động mang lại lợi ích cho nhiều nhóm đối tượng khác nhau
          </Subtitle>
        </HeaderContainer>
        
        <BeneficiariesGrid>
          <BeneficiaryCard
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CardIconWrapper>
              <CardIcon>
                <FaGraduationCap />
              </CardIcon>
            </CardIconWrapper>
            <CardTitle>Sinh viên ULIS</CardTitle>
            <CardContent>
              Đối tượng chính của dự án, giúp sinh viên nâng cao sức khỏe, cải thiện thể chất và tinh thần để học tập hiệu quả hơn.
            </CardContent>
            <CardList>
              <li>Giảm căng thẳng trong mùa thi cử</li>
              <li>Tăng khả năng tập trung học tập</li>
              <li>Đáp ứng tiêu chí "Sinh viên 5 tốt"</li>
              <li>Xây dựng thói quen lành mạnh</li>
            </CardList>
            <LearnMoreButton
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Tìm hiểu thêm <FaArrowRight />
            </LearnMoreButton>
          </BeneficiaryCard>
          
          <BeneficiaryCard
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CardIconWrapper>
              <CardIcon>
                <FaBriefcase />
              </CardIcon>
            </CardIconWrapper>
            <CardTitle>Người làm văn phòng</CardTitle>
            <CardContent>
              Nhóm đối tượng thường xuyên phải ngồi nhiều, ít có thời gian vận động, dễ gặp các vấn đề về sức khỏe.
            </CardContent>
            <CardList>
              <li>Giảm đau lưng, mỏi cổ vai gáy</li>
              <li>Cải thiện tinh thần làm việc</li>
              <li>Tăng năng suất công việc</li>
              <li>Phòng ngừa bệnh văn phòng</li>
            </CardList>
            <LearnMoreButton
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Tìm hiểu thêm <FaArrowRight />
            </LearnMoreButton>
          </BeneficiaryCard>
          
          <BeneficiaryCard
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CardIconWrapper>
              <CardIcon>
                <FaRunning />
              </CardIcon>
            </CardIconWrapper>
            <CardTitle>Người ít vận động</CardTitle>
            <CardContent>
              Những người ít tập thể dục hoặc chưa có động lực để rèn luyện có thể bắt đầu từ những bài tập nhẹ nhàng.
            </CardContent>
            <CardList>
              <li>Bắt đầu với bài tập phù hợp</li>
              <li>Xây dựng thói quen từ từ</li>
              <li>Cải thiện sức khỏe tổng thể</li>
              <li>Tăng cường sức đề kháng</li>
            </CardList>
            <LearnMoreButton
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Tìm hiểu thêm <FaArrowRight />
            </LearnMoreButton>
          </BeneficiaryCard>
          
          <BeneficiaryCard
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CardIconWrapper>
              <CardIcon>
                <FaUsers />
              </CardIcon>
            </CardIconWrapper>
            <CardTitle>Mọi người quan tâm sức khỏe</CardTitle>
            <CardContent>
              Dự án không giới hạn đối tượng, bất cứ ai cũng có thể tham gia để cải thiện chất lượng cuộc sống.
            </CardContent>
            <CardList>
              <li>Nâng cao nhận thức về sức khỏe</li>
              <li>Tham gia cộng đồng năng động</li>
              <li>Học hỏi kiến thức về vận động</li>
              <li>Cải thiện chất lượng cuộc sống</li>
            </CardList>
            <LearnMoreButton
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Tìm hiểu thêm <FaArrowRight />
            </LearnMoreButton>
          </BeneficiaryCard>
        </BeneficiariesGrid>
        
        <ExpectedChanges
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <ChangesHeader>
            <ChangesTitle>Những Thay Đổi Dự Kiến</ChangesTitle>
            <ChangesDescription>
              Tham gia chiến dịch 21 ngày vận động sẽ mang lại nhiều thay đổi tích cực cho cuộc sống
            </ChangesDescription>
          </ChangesHeader>
          
          <ChangesList>
            <ChangeItem
              custom={0}
              variants={changeItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ChangeItemTitle>
                <ChangeItemIcon>
                  <FaGraduationCap />
                </ChangeItemIcon>
                Cải thiện kỹ năng quản lý thời gian
              </ChangeItemTitle>
              <ChangeItemContent>
                Người tham gia học cách sắp xếp thời gian hợp lý để vận động, từ đó nâng cao hiệu quả làm việc và học tập.
              </ChangeItemContent>
            </ChangeItem>
            
            <ChangeItem
              custom={1}
              variants={changeItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ChangeItemTitle>
                <ChangeItemIcon>
                  <FaBriefcase />
                </ChangeItemIcon>
                Tăng cường hiệu suất học tập và làm việc
              </ChangeItemTitle>
              <ChangeItemContent>
                Sinh viên ULIS có thể hoàn thành công việc đúng hạn hoặc thậm chí sớm hơn nhờ vào sự hỗ trợ và động lực từ việc duy trì thói quen vận động.
              </ChangeItemContent>
            </ChangeItem>
            
            <ChangeItem
              custom={2}
              variants={changeItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ChangeItemTitle>
                <ChangeItemIcon>
                  <FaRunning />
                </ChangeItemIcon>
                Tăng cường khả năng giải quyết vấn đề
              </ChangeItemTitle>
              <ChangeItemContent>
                Việc tập thể dục giúp cải thiện khả năng tư duy logic, giảm căng thẳng và nâng cao khả năng ra quyết định.
              </ChangeItemContent>
            </ChangeItem>
            
            <ChangeItem
              custom={3}
              variants={changeItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ChangeItemTitle>
                <ChangeItemIcon>
                  <FaUsers />
                </ChangeItemIcon>
                Tạo ra môi trường làm việc chuyên nghiệp
              </ChangeItemTitle>
              <ChangeItemContent>
                Dự án giúp nâng cao ý thức trách nhiệm của sinh viên trong quá trình hoàn thành bài tập trên trường cũng như công việc làm thêm.
              </ChangeItemContent>
            </ChangeItem>
            
            <ChangeItem
              custom={4}
              variants={changeItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ChangeItemTitle>
                <ChangeItemIcon>
                  <FaGraduationCap />
                </ChangeItemIcon>
                Giảm căng thẳng trong mùa deadline
              </ChangeItemTitle>
              <ChangeItemContent>
                Vận động giúp cải thiện tâm trạng, tăng cường sức khỏe tinh thần, giúp sinh viên vượt qua những giai đoạn áp lực cao một cách dễ dàng hơn.
              </ChangeItemContent>
            </ChangeItem>
          </ChangesList>
        </ExpectedChanges>
      </Container>
    </Section>
  )
}
