import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const BBSCardList = () => {
	return (
		<div className="grid grid-cols-3 gap-4 pt-5 w-10/12 mx-auto ">
			<Card>
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>
						Deploy your new project in one-click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					excepturi, quis corporis in molestiae at unde neque recusandae
					deleniti reprehenderit vero non sint. Sint magni minima, nulla qui
					ipsa maiores.
				</CardContent>
				<CardFooter className="flex justify-between">
					<Link
						className="bg-black text-white p-3 rounded-md"
						href="/bbs-posts/1"
					>
						Read more
					</Link>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>
						Deploy your new project in one-click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					excepturi, quis corporis in molestiae at unde neque recusandae
					deleniti reprehenderit vero non sint. Sint magni minima, nulla qui
					ipsa maiores.
				</CardContent>
				<CardFooter className="flex justify-between">
					<Link
						className="bg-black text-white p-3 rounded-md"
						href="/bbs-posts/1"
					>
						Read more
					</Link>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>
						Deploy your new project in one-click.
					</CardDescription>
				</CardHeader>
				<CardContent>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
					excepturi, quis corporis in molestiae at unde neque recusandae
					deleniti reprehenderit vero non sint. Sint magni minima, nulla qui
					ipsa maiores.
				</CardContent>
				<CardFooter className="flex justify-between">
					<Link
						className="bg-black text-white p-3 rounded-md"
						href="/bbs-posts/1"
					>
						Read more
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
};

export default BBSCardList;
