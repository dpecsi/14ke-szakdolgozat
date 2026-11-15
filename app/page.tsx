"use client";

import { User } from "@/prisma/types";
import axios from "axios";
import dayjs from "dayjs";
import { SunMoon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const [loading, setLoading] = useState<boolean>(false);
  const testDb = async () => {
    setLoading(true);
    try {
      const resp = await axios.get<{ users: User[] }>("/api/users", {
        timeout: 5_000,
        transitional: {
          clarifyTimeoutError: true,
        },
      });
      toast.success(`${resp.data.users.length} db felhasználó beolvasva!`);
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
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex min-h-screen justify-center bg-gray-100 p-4">
      <div className="w-full max-w-xl space-y-3 self-center">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Szolgálati jegy követő
        </h1>
        <div className="rounded-2xl bg-white p-6 shadow-xl">
          <h2 className="mb-6 text-xl font-bold wrap-break-word text-gray-800 dark:text-white">
            Tesztelési oldal
          </h2>
          <div>
            <input
              className="input w-full input-primary dark:bg-gray-700 dark:text-white"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="name"
              autoComplete="off"
            />
          </div>
          <button className="btn me-2 mt-4 btn-primary dark:btn-info" onClick={testApi}>
            API teszt
          </button>
          <button
            className="btn mt-4 btn-primary dark:btn-info"
            onClick={testDb}
            disabled={loading}
          >
            DB teszt{!loading || (<span className="loading loading-spinner loading-xs"></span>)}
          </button>
        </div>
      </div>
    </main>
  );
}
