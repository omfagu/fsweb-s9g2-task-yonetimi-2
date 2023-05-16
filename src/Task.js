import { differenceInDays } from "date-fns";
import { formatDistanceToNow } from "date-fns";
import tr from "date-fns/locale/tr";

const Task = ({ taskObj, onComplete }) => {
  const remainingDays = formatDistanceToNow(new Date(taskObj.deadline), {
    locale: tr,
    addSuffix: true,
    includeSeconds: false,
    addSpace: true,
  });
  const bitisTarihi = new Date(taskObj.deadline);
  const kalanGun = differenceInDays(bitisTarihi, new Date());

  return (
    <div className="task p-6 bg-white rounded-md leading-6 mt-4 shadow-md">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:
        <span className={`task ${kalanGun <= 3 ? "bg-red-200" : ""}`}>
          {remainingDays}
        </span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="pill inline-block py-1 px-3 test-base border border-gray-300 mr-1 mb-2  rounded-full"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
