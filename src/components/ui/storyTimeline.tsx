import { Timeline, Card} from "@chakra-ui/react";

export default function StoryTimeline() {
  return (
    <Timeline.Root size="xl" variant="outline">
      <Timeline.Item>
        <Timeline.Content flex="1" />
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1">
          <Timeline.Title color="black">2004年10月</Timeline.Title>
          <Card.Root maxW="sm" overflow="hidden">
            <Card.Body>
              <Card.Title>オレ，誕生</Card.Title>
              <Card.Description>それで俺が生まれたってわけ</Card.Description>
            </Card.Body>
          </Card.Root>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Content flex="1" alignItems="flex-end">
          <Timeline.Title color="black">2023年3月</Timeline.Title>
          <Card.Root maxW="sm" overflow="hidden">
            <Card.Body>
              <Card.Title>幼稚園を卒園</Card.Title>
              <Card.Description>19年間の幼稚園生活に終わりを告げる</Card.Description>
            </Card.Body>
          </Card.Root>
        </Timeline.Content>
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1" />
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Content flex="1" />
        <Timeline.Connector>
          <Timeline.Separator />
          <Timeline.Indicator />
        </Timeline.Connector>
        <Timeline.Content flex="1">
          <Timeline.Title color="black">2023年4月</Timeline.Title>
          <Card.Root maxW="sm" overflow="hidden">
            <Card.Body>
              <Card.Title>隣町の裏山に入山</Card.Title>
              <Card.Description>自分探しのために山に入る．</Card.Description>
            </Card.Body>
          </Card.Root>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline.Root>
  )
}
