"use client"

import { HStack, Button, Link, IconButton } from "@chakra-ui/react"
import { FaTwitter, FaLink } from "react-icons/fa"
import { usePathname } from "next/navigation"

export default function ShareRow({ title }: { title: string }) {
  const pathname = usePathname()

  const getShareUrl = () => {
    if (typeof window === "undefined") return pathname || "/"
    return `${window.location.origin}${pathname || "/"}`
  }

  const handleShareTwitter = () => {
    const url = getShareUrl()
    const intent = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    window.open(intent, "_blank", "noopener,noreferrer")
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl())
    } catch {
      // no-op
    }
  }

  return (
    <HStack justify="space-between" w="100%" mt={10}>
      <Link href="/blog">
        <Button variant="subtle" colorPalette="gray" size="lg">一覧に戻る</Button>
      </Link>

      <HStack gap={2}>
        <IconButton aria-label="Share on Twitter" onClick={handleShareTwitter} variant="subtle" colorPalette="gray" size="lg">
          <FaTwitter />
        </IconButton>
        <IconButton aria-label="Copy link" onClick={handleCopyLink} variant="subtle" colorPalette="gray" size="lg">
          <FaLink />
        </IconButton>
      </HStack>
    </HStack>
  )
}
