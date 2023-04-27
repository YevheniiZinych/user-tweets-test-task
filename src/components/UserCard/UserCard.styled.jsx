import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  display: block;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  margin-right: 83px;
  right: 0;

  & > p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #ebd8ff;
  }

  & > p:first-child {
    margin-top: 26px;
    margin-bottom: 16px;
  }
`;

export const DecorImg = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
  margin-top: 28px;
  margin-left: 36px;
`;

export const AvatarFrame = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 1;
  /* background-position: center;
  background-repeat: no-repeat; */
`;

export const LineLeft = styled.div`
  position: absolute;
  top: 50%;
  width: 40%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const LineRight = styled(LineLeft)`
  right: 0;
`;

export const Button = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  width: 196px;
  height: 50px;
  left: 92px;
  top: 374px;

  margin-top: 26px;
  margin-bottom: 36px;

  color: #373737;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
