"use client";
import { Container, Text, Title ,Rating,Group,Textarea,Button,Divider,Pagination} from "@mantine/core";

export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm" >Your rating</Title>
      <Rating size="lg"/>

      <Textarea
        label="Your review"
        size="sm"
        placeholder="Do you enjoy eating?"
        mt="sm"
        rows={3}
      />

      <Button mt="sm" color="orange" size="sm">Submit Review</Button>

      <Group grow>
        <Divider my="sm"/>
      </Group>

      <Group justify="center">
        <Title order={4}>Elon musk</Title>
        <Rating value={5} readOnly />
      </Group>
      <Text c="dimmed" ta="center" fz="15">Best pizza in this world. l give you X score.</Text>

      <Group grow>
        <Divider my="sm"/>
      </Group>

      <Group justify="center">
      <Title order={4}> Mark Zuck </Title>
      <Rating value={4}  readOnly />
      </Group>
      <Text c="dimmed" fz ="15" ta= "center">My favourite part is pepperoni </Text>
      <Group justify="center">
      <Pagination color="orange" mt = "sm" boundaries ={1} total={20} />
      </Group>

      <Text ta="center" my="sm" c="dimmed" mt="sm" >
        Copyright © 2024 Suriyo Lumsom 660610803
      </Text>
    </Container>
  );
}
