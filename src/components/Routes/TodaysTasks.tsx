import React from "react";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import useTodayTasks from "../hooks/useTodayTasks";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const TodaysTasks: React.FC = () => {
  const todaysTasks = useTodayTasks();

  useDescriptionTitle("tarefas de hoje", "tarefas de hoje");

  return (
    <LayoutRoutes title="tarefas de hoje" tasks={todaysTasks}></LayoutRoutes>
  );
};

export default TodaysTasks;
