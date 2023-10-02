import * as Styled from './styled';

export type MainContainerProps = {
  children: React.ReactNode;
};

export default function MainContainer({ children }: MainContainerProps) {
  return <Styled.Container>{children}</Styled.Container>;
}

// export default function MainContainer() {
//   return <Styled.Container></Styled.Container>;
// }
