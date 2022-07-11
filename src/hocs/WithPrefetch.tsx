import * as React from "react";
import { useEffect, useState, PropsWithChildren } from "react";
import { useQueryClient } from "react-query";
import { usePrevious } from "../hooks/usePrevious";
import { Loading } from "../atoms/Loading";

type Props = PropsWithChildren<{
  queries: Function[];
  height?: string;
}>;
/**
 * @deprecated Использовать atoms/Loading
 */
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
    return <Loading height={height} />;
  }

  if (prevQueries === queries && !loading) {
    return <>{children}</>;
  }

  return null;
}
