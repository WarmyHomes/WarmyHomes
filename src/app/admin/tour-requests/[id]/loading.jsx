import LoadingForm from "@/components/common/misc/loading-form";


const Loading = () => {
	return (
		<>
		
			<LoadingForm
				title="Edit"
				inputCount={10}
				button1Title="Cancel"
				button2Title="Update"
			/>
		
		</>
	);
};

export default Loading;
