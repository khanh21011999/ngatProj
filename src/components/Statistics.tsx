import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { FaChartBar, FaChartPie, FaList } from 'react-icons/fa';

const Section = styled.section`
  padding: 7rem 2rem;
  background: linear-gradient(to bottom, #f8fafc, #f1f5f9);
  overflow: hidden;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled(motion.h2)`
  font-size: 2.75rem;
  font-weight: 800;
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

const Subtitle = styled(motion.p)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #475569;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const ChartContainer = styled(motion.div)`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(226, 232, 240, 0.8);
  transition: all 0.4s ease;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #6366f1 0%, #8b5cf6 100%);
  }

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`

const ChartTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: #1e293b;
  font-size: 1.3rem;
  font-weight: 700;
`

const ChartSubtitle = styled.p`
  margin-bottom: 2rem;
  color: #64748b;
  font-size: 1rem;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.75rem;
    height: 0.75rem;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    border-radius: 50%;
  }
`

const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 1rem;
  border: 1px solid rgba(226, 232, 240, 0.8);
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0;
  border-bottom: 1px dashed rgba(226, 232, 240, 0.8);
  
  &:last-child {
    border-bottom: none;
  }
`

const LegendColor = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`

const LegendText = styled.span`
  font-size: 0.95rem;
  color: #334155;
  font-weight: 500;
  
  strong {
    margin-right: 0.5rem;
  }
`

const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 5px 15px rgba(99, 102, 241, 0.3);
`

const CustomTooltip = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(226, 232, 240, 0.8);
  
  p {
    margin: 0;
    font-weight: 600;
    color: #1e293b;
    
    span {
      color: #6366f1;
    }
  }
`

// Enhanced color palette
const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f97316'];

const awarenessData = [
  { name: 'Rất cần thiết', value: 36.5 },
  { name: 'Cần thiết', value: 54 },
  { name: 'Không cần thiết', value: 9.5 }
];

const satisfactionData = [
  { name: 'Rất hài lòng', value: 37 },
  { name: 'Hài lòng', value: 44.5 },
  { name: 'Chưa hài lòng', value: 18.5 }
];

const reasonsData = [
  { name: 'Thiếu cơ sở vật chất', value: 38 },
  { name: 'Không có thời gian', value: 36 },
  { name: 'Ở trọ xa địa điểm tập', value: 17.5 },
  { name: 'Không thích tập luyện', value: 8.5 }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// Custom tooltip component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCustomTooltip = (props: any) => {
  const { active, payload } = props;
  if (active && payload && payload.length) {
    return (
      <CustomTooltip>
        <p>{payload[0].name}: <span>{payload[0].value}%</span></p>
      </CustomTooltip>
    );
  }
  return null;
};

export default function Statistics() {
  return (
    <Section id="statistics">
      <Container>
        <SectionTitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ duration: 0.7 }}
        >
          Thống Kê Hoạt Động Thể Chất
        </SectionTitle>
        
        <Subtitle
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Dựa trên khảo sát từ sinh viên ULIS, chúng tôi đã tổng hợp những số liệu 
          quan trọng về nhận thức và thói quen vận động thể chất.
        </Subtitle>

        <Grid>
          <ChartContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <ChartTitle>
              <IconWrapper>
                <FaChartPie size={16} />
              </IconWrapper>
              Nhận Thức Sinh Viên
            </ChartTitle>
            <ChartSubtitle>
              Mọi người nghĩ gì về tầm quan trọng của thể thao?
            </ChartSubtitle>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={awarenessData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={85}
                  innerRadius={40}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={2}
                >
                  {awarenessData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      stroke="white"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
              </PieChart>
            </ResponsiveContainer>
            <LegendContainer>
              {awarenessData.map((entry, index) => (
                <LegendItem key={`legend-${index}`}>
                  <LegendColor style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <LegendText>
                    <strong>{entry.name}</strong> {entry.value}%
                  </LegendText>
                </LegendItem>
              ))}
            </LegendContainer>
          </ChartContainer>

          <ChartContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <ChartTitle>
              <IconWrapper>
                <FaChartBar size={16} />
              </IconWrapper>
              Mức Độ Hài Lòng
            </ChartTitle>
            <ChartSubtitle>
              Sinh viên đánh giá thế nào về hoạt động hiện tại?
            </ChartSubtitle>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={satisfactionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={85}
                  innerRadius={40}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={2}
                >
                  {satisfactionData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      stroke="white"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
              </PieChart>
            </ResponsiveContainer>
            <LegendContainer>
              {satisfactionData.map((entry, index) => (
                <LegendItem key={`legend-${index}`}>
                  <LegendColor style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <LegendText>
                    <strong>{entry.name}</strong> {entry.value}%
                  </LegendText>
                </LegendItem>
              ))}
            </LegendContainer>
          </ChartContainer>

          <ChartContainer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <ChartTitle>
              <IconWrapper>
                <FaList size={16} />
              </IconWrapper>
              Rào Cản Chính
            </ChartTitle>
            <ChartSubtitle>
              Những yếu tố nào cản trở sinh viên vận động?
            </ChartSubtitle>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={reasonsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={85}
                  innerRadius={40}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={2}
                >
                  {reasonsData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      stroke="white"
                      strokeWidth={2}
                    />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
              </PieChart>
            </ResponsiveContainer>
            <LegendContainer>
              {reasonsData.map((entry, index) => (
                <LegendItem key={`legend-${index}`}>
                  <LegendColor style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  <LegendText>
                    <strong>{entry.name}</strong> {entry.value}%
                  </LegendText>
                </LegendItem>
              ))}
            </LegendContainer>
          </ChartContainer>
        </Grid>
      </Container>
    </Section>
  )
}
