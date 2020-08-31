import styled from "styled-components";
import { PageLayout } from "./component";

export const StyledPageLayout = styled(PageLayout)`
  --max-width: 22rem;
  --gap: var(--s8);

  padding: var(--s4);

  @media (max-width: 23.6875em) {
    padding: var(--s-1) 0 var(--s-2) 0;
  }

  [alt="Back arrow"] {
    align-self: flex-start;
  }
`;
