import React from "react";
import {
  CustomizeProvider,
  useCustomizeContext,
  useCustomReducer,
} from "../useCustomizeContext";

export const Son1 = () => {
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

const Parent = ({ children }) => {
  const value = useCustomReducer({ initValue: 1 });
  return (
    <CustomizeProvider value={value}>
      <div className="parent">
        <h5>正确示例1</h5>
        <Son2 />
        {children}
      </div>
    </CustomizeProvider>
  );
};

export const WrapperParent = () => (
  <Parent>
    <Son1 />
  </Parent>
)
