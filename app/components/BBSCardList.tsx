import React from "react";

import BBSCard from "./BBSCard";

const BBSCardList = () => {
	return (
		<div className="grid grid-cols-3 gap-4 pt-5 w-10/12 mx-auto ">
			<BBSCard />
			<BBSCard />
			<BBSCard />
		</div>
	);
};

export default BBSCardList;
