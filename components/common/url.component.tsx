import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export interface UrlProps {
  text: string;
  url: string;
}

export default function Url({ text, url }: UrlProps) {
  return (<Link href={url} className="text-blue-400 hover:text-blue-500 hover:underline">{text}</Link>)
}