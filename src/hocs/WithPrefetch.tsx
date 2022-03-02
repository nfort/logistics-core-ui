import * as React from "react";
import { useEffect, useState, PropsWithChildren } from "react";
import { useQueryClient } from "react-query";
import { usePrevious } from "../hooks/usePrevious";
import { COLORS, Loader } from "@holism/components";
import styled from "styled-components";

type Props = PropsWithChildren<{
  queries: Function[];
  height?: string;
}>;
export function WithPrefetch({ children, queries, height = "auto" }: Props) {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(true);
  const prevQueries = usePrevious(queries);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    Promise.all(queries.map((q) => q(queryClient))).finally(() => {
      if (isMounted) {
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [setLoading, queryClient, queries]);

  if (loading) {
    return (
      <LoadingDiv height={height}>
        <Loader dimension="large" color={COLORS.azure} />
      </LoadingDiv>
    );
  }

  if (prevQueries === queries && !loading) {
    return <>{children}</>;
  }

  return null;
}

const LoadingDiv = styled("div")<Pick<Props, "height">>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height};
`;
