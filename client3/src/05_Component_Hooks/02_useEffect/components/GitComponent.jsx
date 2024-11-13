import React from "react";
import CustomHooks from "../services/customhook.services";
import "./table.css";
const GitComponent = () => {
  const data = CustomHooks("https://api.github.com/users");
  console.log("data:", data);
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Profile Pic</th>
            <th>Type</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.login}</td>
                <td>
                  <img
                    src={user.avatar_url}
                    alt="user"
                    height={100}
                    width={100}
                  />
                </td>
                <td>{user.type}</td>
                <td>
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    Profile Link
                  </a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default GitComponent;
