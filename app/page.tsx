"use client";

import axios from "axios";
import dayjs from "dayjs";
import { SunMoon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function HomePage() {
  const [name, setName] = useState<string>("");
  const testApi = async () => {
    try {
      const resp = await axios.get<{ message: string }>("/api/hello", {
        params: {
          name,
        },
        timeout: 5_000,
        transitional: {
          clarifyTimeoutError: true,
        },
      });
      toast.success(resp.data.message);
    } catch (error) {
      if (axios.isAxiosError<{ message: string }>(error)) {
        if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
          toast.error("A kérés időtúllépés miatt nem teljesült. Próbálkozz újra.");
          return;
        }
        // console.log(error.response.status, error.response.data.message);
        if (error.response) toast.error(`Hiba: ${error.response.data.message}`);
      } else {
        console.trace(error);
        toast.error("Ismeretlen hiba történt!");
      }
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200 py-2 dark:bg-gray-800">
      <h1 className={"mb-6 text-3xl font-bold text-gray-800 dark:text-white"}>
        Hello {name || "World"}!
      </h1>
      <input
        className="input input-primary dark:bg-gray-700 dark:text-white"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button className="btn mt-4 btn-primary dark:btn-info" onClick={testApi}>
        API teszt
      </button>
    </div>
  );
}
