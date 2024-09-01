"use client";
import { Loader } from "@/components/Loader/Loader";
import { Modal } from "@/components/Modal";
import { SpaceObject } from "@/interfaces";
import { marketplacesApi } from "@/utils";
import React, { useContext, useEffect, useState } from "react";

interface SpaceConfigurationContextValue {
  spaceConfiguration: SpaceObject;
  loading: boolean;
}

const SpaceConfigurationContext =
  React.createContext<SpaceConfigurationContextValue | null>(null);

export const SpaceConfigurationProvider = ({ children }: any) => {
  const [spaceConfig, setSpaceConfig] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getSpaceConfig = async () => {
    try {
      const config = await marketplacesApi.findSpaceConfiguration();
      setSpaceConfig(config);
      setLoading(false);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };
  useEffect(() => {
    getSpaceConfig();
  }, []);

  const value = { spaceConfiguration: spaceConfig, loading };

  if (loading) return <Loader />;

  return errorMessage ? (
    <Modal>
      <h2>{errorMessage}</h2>
    </Modal>
  ) : (
    <SpaceConfigurationContext.Provider value={value}>
      {children}
    </SpaceConfigurationContext.Provider>
  );
};

export function useSpaceConfiguration() {
  return useContext(
    SpaceConfigurationContext
  ) as SpaceConfigurationContextValue;
}
