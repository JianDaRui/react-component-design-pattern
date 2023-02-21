import React, { useMemo } from "react";
import {
  CustomizeProvider,
  useCustomizeContext,
  useCustomReducer,
} from "../useCustomizeContext";

const Son1 = () => {
  console.log("子组件1 重新渲染了！！");
  return <div className="son">子组件1</div>;
};

const Son2 = () => {
  const { count, handleIncrement } = useCustomizeContext();
  console.log("子组件2 重新渲染了！！");
  return (
    <div className="son">
      <p>子组件2-{count}</p>
      <button onClick={handleIncrement}>增加</button>
    </div>
  );
};


export const Parent02 = () => {
  const value = useCustomReducer({ initValue: 1 });
  return (
    <CustomizeProvider value={value}>
      <div className="parent">
        <h5>正确示例3</h5>
        <Son2 />
        {useMemo(
          () => (
            <Son1 />
          ),
          []
        )}
      </div>
    </CustomizeProvider>
  );
};
