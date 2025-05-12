"use client"

import { MemberForm } from "@/components/collaborative-network/network-member-form";
import { usePathname } from "next/navigation";

// interface Members {
//   name?: string
//   id: string
//   role?: string
//   avatar?: string
// }

// interface NetworkMemberProps {
//   member: Members
// }


export default function UpdateMemberPage({/*{member}: NetworkMemberProps*/}) {

  const pathName = usePathname()
  // member.id = pathName.split("/")[pathName.split("/").length - 1]
  // console.log(member.id)
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 ml-20 mt-10">Update Member</h1>
      <MemberForm /*member={member}*//>
    </div>
  )
}