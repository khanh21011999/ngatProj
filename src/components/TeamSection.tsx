import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaUsers, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa'

const Section = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
    z-index: 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 4rem;
  text-align: center;
  color: #1e293b;
  font-weight: 800;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(90deg, #6366f1, #a5b4fc);
    border-radius: 10px;
  }
`

const TeamInfo = styled(motion.div)`
  margin-bottom: 5rem;
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px -5px rgba(99, 102, 241, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform-style: preserve-3d;
`

const ProjectName = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #1e293b;
  font-weight: 800;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #a5b4fc);
    border-radius: 1.5px;
  }
`

const Location = styled.div`
  font-size: 1.2rem;
  margin: 2rem 0 0;
  color: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  
  svg {
    color: #6366f1;
  }
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const OrganizationInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 10px 30px -5px rgba(99, 102, 241, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
`

const OrganizationTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
  
  svg {
    color: #6366f1;
    font-size: 1.5rem;
  }
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  flex: 1;
`

const InfoItem = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 1rem;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -5px rgba(99, 102, 241, 0.15);
    border-color: rgba(99, 102, 241, 0.3);
  }
`

const InfoLabel = styled.p`
  font-weight: 600;
  color: #64748b;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: #6366f1;
  }
`

const InfoValue = styled.p`
  color: #334155;
  padding-left: 1.25rem;
  font-weight: 500;
  word-break: break-word;
`

const ContactLink = styled.a`
  color: #334155;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #6366f1;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #6366f1;
    
    &:after {
      width: 100%;
    }
  }
`

const TeamMembers = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1.5rem;
  padding: 3rem;
  box-shadow: 0 10px 30px -5px rgba(99, 102, 241, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
`

const TeamMembersTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  color: #1e293b;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
  
  svg {
    color: #6366f1;
    font-size: 1.5rem;
  }
`

const MembersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  flex: 1;
`

const MemberCard = styled(motion.div)`
  background: rgba(248, 250, 252, 0.8);
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #6366f1, #a5b4fc);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 25px -10px rgba(99, 102, 241, 0.25);
    border-color: rgba(99, 102, 241, 0.3);
    
    &:before {
      transform: scaleX(1);
    }
  }
`

const MemberAvatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #6366f1;
  font-size: 2.5rem;
  box-shadow: 0 5px 15px -5px rgba(99, 102, 241, 0.4);
  border: 3px solid white;
  transition: all 0.3s ease;
  
  ${MemberCard}:hover & {
    transform: scale(1.05);
    box-shadow: 0 8px 20px -5px rgba(99, 102, 241, 0.5);
  }
`

const MemberInfo = styled.div`
  text-align: center;
  width: 100%;
`

const MemberName = styled.h4`
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
`

const MemberId = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  padding: 0.25rem 0.75rem;
  background: #e2e8f0;
  border-radius: 1rem;
  display: inline-block;
  font-weight: 500;
  transition: all 0.3s ease;
  
  ${MemberCard}:hover & {
    background: #c7d2fe;
    color: #4338ca;
  }
`

const MemberRole = styled.p`
  color: #475569;
  text-align: center;
  font-weight: 500;
  padding: 0.5rem 0;
  border-top: 1px dashed #e2e8f0;
  margin-top: 0.5rem;
`

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  })
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export default function TeamSection() {
  const members = [
    { name: 'Hà Đặng Bảo Ngọc', id: '22041251', role: 'Thành viên' },
    { name: 'Trần Hương Nga', id: '23041107', role: 'Nhóm trưởng' },
    { name: 'Phạm Thị Ngát', id: '23041727', role: 'Thành viên' },
    { name: 'Nguyễn Thị Hương Nga', id: '23040820', role: 'Thành viên' },
    { name: 'Nguyễn Thị Thanh Ngân', id: '23040078', role: 'Thành viên' }
  ]

  return (
    <Section id="team">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          Đội Ngũ Thực Hiện
        </Title>

        <TeamInfo
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <ProjectName>21 Ngày, Cơ Thể Mới</ProjectName>
          <Location>
            <FaMapMarkerAlt />
            Trường ĐHNN-ĐHQG Hà Nội
          </Location>
        </TeamInfo>

        <ContentGrid>
          <OrganizationInfo
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <OrganizationTitle>
              <FaUsers />
              Thông tin về đơn vị thực hiện
            </OrganizationTitle>
            
            <InfoGrid>
              <InfoItem>
                <InfoLabel><FaUsers /> Tên tổ chức:</InfoLabel>
                <InfoValue>Nhóm Echo</InfoValue>
              </InfoItem>
              
              <InfoItem>
                <InfoLabel><FaMapMarkerAlt /> Địa chỉ:</InfoLabel>
                <InfoValue>Trường ĐH Ngoại Ngữ - ĐH Quốc gia Hà Nội</InfoValue>
              </InfoItem>
              
              <InfoItem>
                <InfoLabel><FaUserCircle /> Người liên lạc:</InfoLabel>
                <InfoValue>Trần Hương Nga</InfoValue>
              </InfoItem>
              
              <InfoItem>
                <InfoLabel><FaUserCircle /> Chức vụ:</InfoLabel>
                <InfoValue>Nhóm trưởng</InfoValue>
              </InfoItem>
              
              <InfoItem>
                <InfoLabel><FaEnvelope /> Email:</InfoLabel>
                <InfoValue>
                  <ContactLink href="mailto:huongnga25.10@gmail.com">
                    huongnga25.10@gmail.com
                  </ContactLink>
                </InfoValue>
              </InfoItem>
              
              <InfoItem>
                <InfoLabel><FaPhone /> Telephone:</InfoLabel>
                <InfoValue>
                  <ContactLink href="tel:+84862929832">
                    0862929832
                  </ContactLink>
                </InfoValue>
              </InfoItem>
            </InfoGrid>
          </OrganizationInfo>

          <TeamMembers
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <TeamMembersTitle>
              <FaUsers />
              Thành viên nhóm
            </TeamMembersTitle>
            
            <MembersGrid as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {members.map((member, index) => (
                <MemberCard
                  key={member.id}
                  custom={index}
                  variants={cardVariants}
                >
                  <MemberAvatar>
                    <FaUserCircle />
                  </MemberAvatar>
                  <MemberInfo>
                    <MemberName>{member.name}</MemberName>
                    <MemberId>{member.id}</MemberId>
                    <MemberRole>{member.role}</MemberRole>
                  </MemberInfo>
                </MemberCard>
              ))}
            </MembersGrid>
          </TeamMembers>
        </ContentGrid>
      </Container>
    </Section>
  )
}
