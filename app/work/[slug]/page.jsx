// SERVER COMPONENT — generateStaticParams requires no 'use client'
import ProjectClient from "./ProjectClient";

const SLUGS = [
  "bio-corner","w2w","mc20","prometheus","winloop",
  "bios-mater","agro-builder","digi4bio","pv-igu","belm"
];

export async function generateStaticParams(){
  return SLUGS.map(slug=>({slug}));
}

export default function ProjectPage({params}){
  return <ProjectClient slug={params?.slug||"bio-corner"}/>;
}
