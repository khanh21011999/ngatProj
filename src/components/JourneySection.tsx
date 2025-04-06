import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUsers, FaChartLine, FaCheckCircle, FaTrophy } from 'react-icons/fa'

const Section = styled.section`
  padding: 5rem 2rem;
  background: #f8fafc;
`

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #1e293b;
`

const Timeline = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #6366f1;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
    
    @media (max-width: 992px) {
      left: 31px;
    }
  }
`

const TimelineItem = styled(motion.div)`
  padding: 15px 50px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  
  &:nth-child(odd) {
    left: 0;
  }
  
  &:nth-child(even) {
    left: 50%;
  }
  
  @media (max-width: 992px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    
    &:nth-child(odd), &:nth-child(even) {
      left: 0;
    }
  }
`

const TimelineContent = styled.div`
  padding: 25px 30px;
  background: white;
  position: relative;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`

const TimelineIcon = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #6366f1;
  top: 25px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  
  ${TimelineItem}:nth-child(odd) & {
    right: -24px;
  }
  
  ${TimelineItem}:nth-child(even) & {
    left: -24px;
  }
  
  @media (max-width: 992px) {
    left: 10px;
    
    ${TimelineItem}:nth-child(odd) &, ${TimelineItem}:nth-child(even) & {
      left: 10px;
    }
  }
`

const TimelineTitle = styled.h3`
  margin: 0 0 12px 0;
  color: #334155;
  font-size: 1.4rem;
`

const TimelineDescription = styled.p`
  margin: 0;
  color: #64748b;
  line-height: 1.7;
  font-size: 1.05rem;
`

const TimelineList = styled.ul`
  margin-top: 15px;
  padding-left: 25px;
  color: #64748b;
  
  li {
    margin-bottom: 8px;
    font-size: 1.05rem;
  }
`

export default function JourneySection() {
  return (
    <Section id="journey">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hành Trình 21 Ngày Thay Đổi
        </Title>
        
        <Timeline>
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TimelineIcon>
              <FaCalendarAlt />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Khởi động (Ngày 1-3)</TimelineTitle>
              <TimelineDescription>
                Giai đoạn chuẩn bị và làm quen với thói quen vận động.
              </TimelineDescription>
              <TimelineList>
                <li>Chia sẻ thông tin về lợi ích của việc vận động 20 phút mỗi ngày</li>
                <li>Hướng dẫn cách lựa chọn bài tập phù hợp với thể trạng</li>
                <li>Chuẩn bị dụng cụ cần thiết và không gian tập luyện</li>
                <li>Video hướng dẫn khởi động nhẹ nhàng</li>
              </TimelineList>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TimelineIcon>
              <FaUsers />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Xây dựng thói quen (Ngày 4-10)</TimelineTitle>
              <TimelineDescription>
                Tập trung vào việc duy trì đều đặn và khám phá các bài tập đa dạng.
              </TimelineDescription>
              <TimelineList>
                <li>Mỗi ngày chia sẻ bài tập cụ thể (đi bộ nhanh, yoga, chạy bộ nhẹ...)</li>
                <li>Kết hợp hình ảnh, video minh họa chi tiết</li>
                <li>Cung cấp các lựa chọn bài tập đa dạng tránh nhàm chán</li>
                <li>Tạo cộng đồng để mọi người cùng tham gia, chia sẻ tiến độ</li>
              </TimelineList>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TimelineIcon>
              <FaChartLine />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Nâng cao cường độ (Ngày 11-17)</TimelineTitle>
              <TimelineDescription>
                Tăng dần cường độ tập luyện và theo dõi sự tiến bộ.
              </TimelineDescription>
              <TimelineList>
                <li>Tăng cường độ bài tập phù hợp với sự tiến bộ</li>
                <li>Tổ chức các mini-game, phần thưởng nhỏ để tăng tính tương tác</li>
                <li>Cung cấp bảng theo dõi tiến độ, sticker khen thưởng</li>
                <li>Chia sẻ câu chuyện thành công để tạo động lực</li>
              </TimelineList>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TimelineIcon>
              <FaCheckCircle />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Củng cố thói quen (Ngày 18-21)</TimelineTitle>
              <TimelineDescription>
                Hoàn thiện và duy trì thói quen vận động bền vững.
              </TimelineDescription>
              <TimelineList>
                <li>Đánh giá sự tiến bộ và thay đổi sau gần 3 tuần</li>
                <li>Lập kế hoạch duy trì thói quen sau khi kết thúc chương trình</li>
                <li>Chia sẻ các bài tập nâng cao cho người muốn tiếp tục phát triển</li>
                <li>Chuẩn bị tâm lý để duy trì thói quen lâu dài</li>
              </TimelineList>
            </TimelineContent>
          </TimelineItem>
          
          <TimelineItem
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TimelineIcon>
              <FaTrophy />
            </TimelineIcon>
            <TimelineContent>
              <TimelineTitle>Kết thúc & Tiếp tục</TimelineTitle>
              <TimelineDescription>
                Tổng kết chương trình và khuyến khích duy trì thói quen.
              </TimelineDescription>
              <TimelineList>
                <li>Tổng kết chiến dịch, chia sẻ thành quả của người tham gia</li>
                <li>Trao giải thưởng cho những người hoàn thành xuất sắc</li>
                <li>Khuyến khích duy trì thói quen vận động hàng ngày</li>
                <li>Xây dựng cộng đồng lâu dài để tiếp tục hỗ trợ nhau</li>
              </TimelineList>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </Section>
  )
}
