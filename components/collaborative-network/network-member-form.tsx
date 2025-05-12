"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { NetworkMember } from "@/types/collaborative-network"
import mongoose from "mongoose"
import { ObjectId } from "mongoose"

interface Members {
  networkId: string
  id?: string
  name?: string
  role?: string
  avatar?: string
  depertment?: string
  location?: string
  skills?: string
  connection?: string
  contributionScore?: number
  joinedAt?: string
  status?: string
  bio?: string
  email?: string
  phone?: number
  // socialLinks?: {
    linkedIn?:string
    twitter?: string
    github?: string
    website?: string
  // }
}

interface NetworkMemberProps {
  member?: Members
}

export const MemberForm = ({ member }: NetworkMemberProps) => {
  
  // console.log(member?.id)
    const router = useRouter()
      const [isLoading, setIsLoading] = useState(false)
      const [formData, setFormData] = useState<Members>({
        networkId:member?.networkId || "",
        id: member?.id || "",
        name: member?.name || "",
        role: member?.role || "",
        avatar: member?.avatar || "",
        depertment: member?.depertment || "",
        location: member?.location || "",
        skills: member?.skills || "",
        connection: member?.connection || "",
        contributionScore: member?.contributionScore || 0,
        joinedAt: member?.joinedAt || "",
        status: member?.status || "",
        bio: member?.bio || "",
        email: member?.email || "",
        phone: member?.phone || 0,
        // socialLinks: {
          linkedIn: member?.linkedIn || "",
          twitter: member?.twitter || "",
          github: member?.github || "",
          website: member?.website || "",

        // }
      })


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
      
    // Auto-generate id from name if id field is empty
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

  //   try {
  //     const url = member?.id ? `/api/categories/` : "/api/categories"

  //     const method = member?.id ? "PUT" : "POST"

  //     const response = await fetch(url, {
  //       method,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     })

  //     if (!response.ok) {
  //       throw new Error("Failed to save member")
  //     }

  //     toast({
  //       title: member?.id ? "member updated" : "member created",
  //       description: member?.id
  //         ? "Your changes have been saved successfully."
  //         : "The new member has been created successfully.",
  //     })

  //     router.push("/dashboard/categories")
  //     router.refresh()
  //   } catch (error) {
  //     console.error("Error saving member:", error)
  //     toast({
  //       title: "Error",
  //       description: "There was a problem saving the member. Please try again.",
  //       variant: "destructive",
  //     })
  //   } finally {
  //     setIsLoading(false)
  //   }
  }
    return (
        <Card className="ml-20 mr-20">
            <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">

                <div className="space-y-2">
                <Label htmlFor="id">id</Label>
                <Input
                    id="id"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    placeholder={ member?.id ? member?.id : "enter-id-here"}
                    required
                />
                {/* <p className="text-sm text-gray-500">Used in URLs. Only lowercase letters, numbers, and hyphens.</p>s */}
                </div>
                
                <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder= { member?.name ? member?.name : "Enter member name"}
                    required
                />
                </div>

                <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Input
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder={ member?.role ? member?.role : "Enter member role"}
                />
                </div>

                <div className="space-y-2">
                <Label htmlFor="avatar">Avatar URL</Label>
                <Input
                    id="avatar"
                    name="avatar"
                    value={formData.avatar || ""}
                    onChange={handleChange}
                    placeholder={ member?.avatar ? member?.avatar : "https://example.com/avatar.jpg"}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="depertment">Depertment</Label>
                <Input
                    id="depertment"
                    name="depertment"
                    value={formData.depertment}
                    onChange={handleChange}
                    placeholder={ member?.depertment ? member?.depertment : "Enter member depertment"}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder={ member?.location ? member?.location : "Enter member location"}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="skills">Skills</Label>
                <Input
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder={ member?.skills ? member?.skills : "Enter member skills"}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="connection">Connection</Label>
                <Input
                    id="connection"
                    name="connection"
                    value={formData.connection}
                    onChange={handleChange}
                    placeholder={ member?.connection ? member?.connection : "Enter member connection"}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="contributionScore">ContributionScore</Label>
                <Input
                    id="contributionScore"
                    name="contributionScore"
                    value={formData.contributionScore}
                    onChange={handleChange}
                    placeholder={ member?.contributionScore ? member?.contributionScore.toString() : "Enter member contribution score"}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="joinedAt">Joined At</Label>
                <Input
                    id="joinedAt"
                    name="joinedAt"
                    value={formData.joinedAt}
                    onChange={handleChange}
                    placeholder={ member?.joinedAt ? member?.joinedAt : "Enter member joinedAt"}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Input
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    placeholder={ member?.status ? member?.status : "Enter member status"}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder={ member?.bio ? member?.bio : "Enter member bio"}
                    rows={4}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={ member?.email ? member?.email : "Enter member email"}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={ member?.phone ? member?.phone.toString() : "Enter member phone"}
                />
                </div>
                <div className="space-y-2">
                <Label htmlFor="sociaclLinks">Social Links:</Label>
                </div>
                <div className="space-y-2">
                <Label htmlFor="linkedIn">Linked In</Label>
                <Input
                    id="linkedIn"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleChange}
                    placeholder={ member?.linkedIn ? member?.linkedIn.toString() : "Enter member linkedIn"}
                />
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                    id="twitter"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleChange}
                    placeholder={ member?.twitter ? member?.twitter.toString() : "Enter member twitter"}
                />
                <Label htmlFor="github">Github</Label>
                <Input
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder={ member?.github ? member?.github.toString() : "Enter member github"}
                />
                <Label htmlFor="website">Website</Label>
                <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder={ member?.website ? member?.website.toString() : "Enter member website"}
                />
                </div>

                <div className="flex gap-4">
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Saving..." : member?.id ? "Update Member" : "Create Member"}
                </Button>
                <Button type="button" variant="outline" onClick={() => router.push("/dashboard/")}>
                    Cancel
                </Button>
                </div>
            </form>
            </CardContent>
        </Card>
    )
}
