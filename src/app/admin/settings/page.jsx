import React from "react";
import "./page.scss";
import { resetDatabaseAction } from "@/actions/admin-settings-action";

const AdminSettings = async() => {
const resetDatabase=async()=>{
  await resetDatabaseAction()
}

  return (
    <div className="admin-settings-page-container">
      <div className="reset-database-container">
        <h4>Reset Database</h4>
        <p>
          You are about to delete all records except those whose built-in fields
          are true. Are you sure to reset database
        </p>
        <button className="reset-database-button" onClick={resetDatabase}>Reset Database</button>
      </div>
    </div>
  );
};

export default AdminSettings;
