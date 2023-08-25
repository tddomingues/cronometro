import { Container, Box, BoxTime } from "./MarkupType.style";

import { useClock } from "../../hooks/useClock";

const MarkupType = () => {
  const { hr, min, sec } = useClock();
  return (
    <Container>
      <Box>
        <BoxTime>
          <div>
            <p>Horas</p>
          </div>
          <span>{hr}</span>
        </BoxTime>
        <span>:</span>
        <BoxTime>
          <div>
            <p>Minutos</p>
          </div>
          <span>{min}</span>
        </BoxTime>
        <span>:</span>
        <BoxTime>
          <div>
            <p>Segundos</p>
          </div>
          <span>{sec}</span>
        </BoxTime>
      </Box>
    </Container>
  );
};

export default MarkupType;
