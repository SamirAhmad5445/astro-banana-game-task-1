import { $ as $groups, G as Group } from './index_DqsHt47S.mjs';

const POST = async ({ request }) => {
  const data = await request.json();
  try {
    const { name } = data;
    if (!name) {
      return new Response(
        JSON.stringify({
          message: "Invalid name, failed to join a group.",
          data: null,
          success: false
        }),
        {
          status: 400
        }
      );
    }
    const groups = $groups.get();
    const currentGroup = groups[groups.length - 1];
    if (currentGroup.isFull()) {
      const newGroup = new Group(groups.length + 1);
      newGroup.add(name);
      groups.push(newGroup);
      return new Response(
        JSON.stringify({
          message: `${name} has been added successfully to group ${newGroup.id}`,
          data: newGroup,
          success: true
        }),
        {
          status: 200
        }
      );
    }
    currentGroup.add(name);
    return new Response(
      JSON.stringify({
        message: `${name} has been added successfully to group ${currentGroup.id}`,
        data: currentGroup,
        success: true
      }),
      {
        status: 200
      }
    );
  } catch (e) {
    console.log(e);
    return new Response(
      JSON.stringify({
        message: "An error occurs while processing your request.",
        data: null,
        success: false
      }),
      {
        status: 500
      }
    );
  }
};

export { POST };
