import { Container, Box, Progress } from "./Clock.style";

import { useClock } from "../../hooks/useClock";

const Clock = () => {
  const { hr, min, sec } = useClock();

  return (
    <Container>
      <Box>
        <Progress
          style={{
            background: `conic-gradient(#040004 ${15 * hr}deg, #f4f4f4 0)`,
          }}
        >
          <div>
            <p>Horas</p>
          </div>
          <span>{hr}</span>
        </Progress>

        <Progress
          style={{
            background: `conic-gradient(#040004 ${6 * min}deg, #f4f4f4 0)`,
          }}
        >
          <div>
            <p>Minutos</p>
          </div>
          <span>{min}</span>
        </Progress>

        <Progress
          style={{
            background: `conic-gradient(#040004 ${6 * sec}deg, #f4f4f4 0)`,
          }}
        >
          <div>
            <p>Segundos</p>
          </div>
          <span>{sec}</span>
        </Progress>
      </Box>
    </Container>
  );
};

export default Clock;
