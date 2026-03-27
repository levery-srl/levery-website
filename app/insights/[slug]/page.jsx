// SERVER COMPONENT — no 'use client' — required for generateStaticParams with output:export
import InsightClient from "./InsightClient";

const SLUGS = [
  "ai-02-26","rob-02-26","bio-02-26","ai-01-25","rob-01-25",
  "bio-01-25","xr-03-25","dpp-03-25","bipv-03-25","xr-02-25"
];

export async function generateStaticParams(){
  return SLUGS.map(slug=>({slug}));
}

export default function InsightPage({params}){
  return <InsightClient slug={params?.slug||"ai-02-26"}/>;
}
