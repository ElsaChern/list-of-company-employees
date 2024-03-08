import { styled, keyframes } from "styled-components"

const pulse = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
`

const StyledSkeleton = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50px;
  margin-bottom: 4px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90grad, #f3f3f6 0%, #fafafa 100%);
  display: block;
  animation: ${pulse} 1.5s ease-in-out 0.5s infinite;
`

const Skeleton = ({ width, height }) => {
  return <StyledSkeleton width={width} height={height} />
}

export default Skeleton
