import { useRouteError } from "react-router-dom";

export function ErrorPage() {
      const error = useRouteError();
      return <><h1>oh no</h1>
        <div>went bang</div>
      </>;
}