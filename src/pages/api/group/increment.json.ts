import type { APIRoute } from "astro";
import { $groups } from "../../../utils";

export const PUT: APIRoute = async ({ request }) => {
  const data = await request.json();

  try {
    const { groupId } = data;

    if (groupId <= 0) {
      return new Response(
        JSON.stringify({
          message: "Invalid group ID.",
          data: null,
          success: false,
        }),
        {
          status: 400,
        }
      );
    }

    const group = $groups.get().find((g) => g.id === groupId)!;
    group.increment();

    return new Response(
      JSON.stringify({
        message: `The count for group ${group.id} +1.`,
        data: {
          count: group.count,
        },
        success: true,
      }),
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log(e);
    return new Response(
      JSON.stringify({
        message: "An error occurs while processing your request.",
        data: null,
        success: false,
      }),
      {
        status: 500,
      }
    );
  }
};
