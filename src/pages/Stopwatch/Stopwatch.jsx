import {
  Container,
  Box,
  BoxScreen,
  BoxRecord,
  Progress,
} from "./Stopwatch.style";

import {
  BsFillPlayFill,
  BsFillStopFill,
  BsFillPauseFill,
  BsPlusLg,
} from "react-icons/bs";

import { useStopwatch } from "../../hooks/useStopwatch";

const Stopwatch = () => {
  const { toAdd, start, stop, reset, timeSaver, hr, sec, min, startMarked } =
    useStopwatch();

  return (
    <Container>
      <Box>
        <Progress
          style={{
            background: `conic-gradient(#040004 ${15 * hr}deg, #ededed 0)`,
          }}
        >
          <div>
            <p>Horas</p>
          </div>
          <span>{hr.toString().padStart(2, "0")}</span>
        </Progress>

        <Progress
          style={{
            background: `conic-gradient(#040004 ${6 * min}deg, #ededed 0)`,
          }}
        >
          <div>
            <p>Minutos</p>
          </div>
          <span>{min.toString().padStart(2, "0")}</span>
        </Progress>

        <Progress
          style={{
            background: `conic-gradient(#040004 ${6 * sec}deg, #ededed 0)`,
          }}
        >
          <div>
            <p>Segundos</p>
          </div>
          <span>{sec.toString().padStart(2, "0")}</span>
        </Progress>
      </Box>
      <BoxScreen>
        {!startMarked ? (
          <button onClick={start}>
            <span>
              <BsFillPlayFill />
            </span>
          </button>
        ) : (
          <button onClick={stop}>
            <span>
              <BsFillPauseFill />
            </span>
          </button>
        )}

        {sec === 0 && min === 0 && hr === 0 ? (
          <button>
            <span style={{ opacity: "0.4" }}>
              <BsFillStopFill />
            </span>
          </button>
        ) : (
          <button onClick={reset}>
            <span>
              <BsFillStopFill />
            </span>
          </button>
        )}

        {sec === 0 && min === 0 && hr === 0 ? (
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <span>
              <BsPlusLg style={{ opacity: "0.4" }} />
            </span>
          </button>
        ) : (
          <button onClick={toAdd}>
            <span>
              <BsPlusLg />
            </span>
          </button>
        )}
      </BoxScreen>
      <BoxRecord>
        <div>
          {timeSaver && timeSaver.map((ts) => <p key={Math.random()}>{ts}</p>)}
        </div>
      </BoxRecord>
    </Container>
  );
};

export default Stopwatch;
