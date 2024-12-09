import React from "react";
import { Button } from "antd";

export function ClearCacheButton() {
  const handleClearCache = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Button
      onClick={handleClearCache}
      type="primary"
      danger
      style={{ marginTop: "1rem" }}
    >
      Clear Cache
    </Button>
  );
}
