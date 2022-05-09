import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Mainroute from "./mainroute";
import { BiArrowToTop } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <div className="z-0">
        <Mainroute />
      </div>
      <button className="flex justify-end items-end text-white bg-red-700 rounded-full fixed z-10 px-2 py-2 my-2 mx-5 ">
        <BiArrowToTop size={30} />
      </button>
    </div>
  );
}
