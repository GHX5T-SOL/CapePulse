import { HighlightCard, SectionIntro } from "@/components/cape/ui";
import { dmThreads, feedPosts, users } from "@/lib/site-data";

export default function SocialPage() {
  return (
    <div className="page-shell space-y-8 py-8">
      <div className="chapter-card">
        <SectionIntro
          eyebrow="CapePulse App"
          title="See the people, places, and plans shaping Cape Town right now."
          copy="CapePulse blends a live city feed, profiles, DMs, and nightlife energy so people can move from seeing what’s happening to joining it immediately."
        />
      </div>
      <div className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {feedPosts.map((post) => (
            <HighlightCard key={post.id} detail={post.caption} media={post.media} stat={`${post.reactions} reactions`} title={post.location} />
          ))}
        </div>
        <div className="space-y-4">
          <div className="chapter-card">
            <p className="section-tag">Who is using CapePulse</p>
            <div className="mt-4 space-y-3">
              {users.map((user) => (
                <div key={user.id} className="rounded-[1.3rem] border border-foreground/8 bg-white/70 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.handle} · {user.relationshipStatus}</p>
                    </div>
                    <div className="flex size-11 items-center justify-center rounded-full bg-accent font-semibold text-foreground">
                      {user.avatarLabel}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{user.bio}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="chapter-card">
            <p className="section-tag">Plan-making chats</p>
            <div className="mt-4 space-y-3">
              {dmThreads.map((thread) => (
                <div key={thread.id} className="rounded-[1.3rem] border border-foreground/8 bg-white/70 p-4">
                  <p className="font-medium">{thread.preview}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{thread.updatedAt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
