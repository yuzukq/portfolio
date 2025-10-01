import { Timeline, Card, Box } from "@chakra-ui/react";
import { stories } from "@/data/stories";

export default function StoryTimeline() {
  return (
    <Timeline.Root size="xl" variant="outline">
      {stories.map((story, index) => {
        const isEven = index % 2 === 0;
        const delay = index * 0.2;

        return (
          <Timeline.Item key={story.id}>
            {isEven ? (
              <>
                <Timeline.Content flex="1" />
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator />
                </Timeline.Connector>
                <Timeline.Content flex="1">
                  <Box
                    opacity={0}
                    animation={`fade-in 0.8s ease-in-out ${delay}s forwards`}
                  >
                    <Timeline.Title color="black">{story.date}</Timeline.Title>
                    <Card.Root maxW="sm" overflow="hidden">
                      <Card.Body>
                        <Card.Title>{story.title}</Card.Title>
                        <Card.Description>{story.description}</Card.Description>
                      </Card.Body>
                    </Card.Root>
                  </Box>
                </Timeline.Content>
              </>
            ) : (
              <>
                <Timeline.Content flex="1" alignItems="flex-end">
                  <Box
                    opacity={0}
                    animation={`fade-in 0.8s ease-in-out ${delay}s forwards`}
                  >
                    <Timeline.Title color="black">{story.date}</Timeline.Title>
                    <Card.Root maxW="sm" overflow="hidden">
                      <Card.Body>
                        <Card.Title>{story.title}</Card.Title>
                        <Card.Description>{story.description}</Card.Description>
                      </Card.Body>
                    </Card.Root>
                  </Box>
                </Timeline.Content>
                <Timeline.Connector>
                  <Timeline.Separator />
                  <Timeline.Indicator />
                </Timeline.Connector>
                <Timeline.Content flex="1" />
              </>
            )}
          </Timeline.Item>
        );
      })}
    </Timeline.Root>
  );
}
