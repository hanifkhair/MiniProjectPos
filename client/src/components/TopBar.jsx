import {
  Flex,
  Center,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stat,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch, CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { orderInfoModal } from "../redux/modalManager";

export default function TopBar() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.customerInfo);
  const orderType = useSelector((state) => state.orderType.value);

  return (
    <>
      <Flex className="top-container" bg={"#101314"}>
        <Flex className="top-spacing" paddingLeft={"10px"}>
          <InputGroup
            bg={"var(--greyopa)"}
            w={"70%"}
            borderColor={"#111314"}
            // borderRadius={"6px"}
            style={{ borderRadius: "6px" }}
          >
            {" "}
            <InputLeftElement>
              <CiSearch color="var(--text-l3)" size={"30px"} />
            </InputLeftElement>
            <Input type="text" placeholder="Search" color="#595959" />
          </InputGroup>
        </Flex>
        <Flex
          className="top-spacing"
          justifyContent={"end"}
          paddingRight={"20px"}
        >
          <Flex
            className="table"
            cursor={"pointer"}
            onClick={() => {
              dispatch(orderInfoModal(true));
            }}
          >
            <Stat>
              <StatNumber display={orderType === "Dine In" ? "block" : "none"}>
                {userInfo.table ? userInfo.table : "Select Table"}
              </StatNumber>
              <StatNumber
                display={orderType === "Take Away" ? "block" : "none"}
              >
                {userInfo.cutlery ? "With Cutlery" : "No Cutlery"}
              </StatNumber>
              <StatNumber display={orderType === "Delivery" ? "block" : "none"}>
                {userInfo.delivery ? userInfo.delivery : "Select Delivery"}
              </StatNumber>
              <StatNumber
                display={orderType === "Reservation" ? "block" : "none"}
              >
                {orderType === "Reservation" ? "Manual Input" : "Manual Input"}
              </StatNumber>
              <StatHelpText>Customer Name</StatHelpText>
            </Stat>
          </Flex>
          <CiEdit
            color="var(--text-l2)"
            size={"30px"}
            style={{ borderRadius: "10px" }}
            border={"2px red solid"}
            onClick={() => {
              dispatch(orderInfoModal(true));
            }}
            cursor={"pointer"}
          />
        </Flex>
      </Flex>
    </>
  );
}

{
  /* // 	Avatar,
// 	Button,
// } from "@chakra-ui/react";
// import { LoginModal } from "./loginmodal";
// import { VscAccount } from "react-icons/vsc";
// import { CiSearch } from "react-icons/ci";
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// export default function TopBar() {
	const userSelector = useSelector((state) => state.login.auth);
	const location = useLocation().pathname.split("/");

	const modal2 = useDisclosure();

	const dispatch = useDispatch();
	function logout() {
		localStorage.removeItem("auth");
		dispatch({
			type: "logout",
		});
		return;
	}
	return (
		<>
			<Flex w={"100%"}>
				<Flex w={"100%"} gap={"50px"}>
					<Center
						p={"0px 18px"}
						color={"white"}
						justifyContent={"space-between"}
					>
						<Flex
							display={location[1] == ("cashier" || "login") ? "block" : "none"}
						>
							<InputGroup>
								<Input
									w={"200px"}
									fontSize={"12px"}
									border={"1px gray.600 solid"}
									type={"text"}
									color={"gray.400"}
									placeholder="Search"
									h={"28px"}
									id="searchbar"
									backgroundColor={
										location[1] == ("cashier" || "login")
											? "#424242"
											: "#dedddc"
									}
								></Input>
								<InputLeftElement w={"30px"} h={"100%"}>
									<Icon
										colorScheme="whiteAlpha"
										color={"gray.400"}
										as={CiSearch}
										w={"28px"}
										h={"28px"}
										cursor={"pointer"}
									></Icon>
								</InputLeftElement>
							</InputGroup>
						</Flex>
					</Center>

					<Center
						p={"10px"}
						gap={"30px"}
						justifyContent={"space-between"}
						pr={"30px"}
					>
						<Flex flexDir={"column"} color={"white"}>
							<Flex
								fontSize={"17px"}
								display={
									location[1] == ("cashier" || "login") ? "block" : "none"
								}
							>
								Table 5
							</Flex>
							<Flex
								fontSize={"10px"}
								color={"grey"}
								display={
									location[1] == ("cashier" || "login") ? "block" : "none"
								}
							>
								{orderType === "Reservation" ? "Manual Input" : "Manual Input"}
							</StatNumber>
							<StatHelpText>
								{userInfo.custName
									? userInfo.custName
									: "Customer Name"}
							</StatHelpText>
						</Stat>
					</Flex>
					<CiEdit
						color="var(--text-l2)"
						size={"30px"}
						style={{ borderRadius: "10px" }}
						border={"2px red solid"}
						onClick={() => {
							dispatch(orderInfoModal(true));
						}}
						cursor={"pointer"}
					/>
				</Flex>
			</Flex>
		</>
	);
}
// BACKUP TOPBAR PUNYA THOMAS
// import { LoginModal } from "./loginmodal";
// import { VscAccount } from "react-icons/vsc";
// import { CiSearch } from "react-icons/ci";

// export default function TopBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w={"100%"}>
        <Flex justifyContent={"space-between"} w={"100%"}>
          <Center p={"0px 18px"}>
            <InputGroup>
              <Input
                w={"200px"}
                fontSize={"12px"}
                border={"1px gray.600 solid"}
                type={"text"}
                color={"gray.400"}
                placeholder="Search"
                h={"28px"}
                id="searchbar"
                backgroundColor={"#424242"}
              ></Input>
              <InputLeftElement w={"30px"} h={"100%"}>
                <Icon
                  colorScheme="whiteAlpha"
                  color={"gray.400"}
                  as={CiSearch}
                  w={"28px"}
                  h={"28px"}
                  cursor={"pointer"}
                ></Icon>
              </InputLeftElement>
            </InputGroup>
          </Center>
          <Center
            p={"10px"}
            gap={"30px"}
            w={"274px"}
            justifyContent={"space-between"}
            pr={"30px"}
          >
            <Flex flexDir={"column"} color={"white"}>
              <Flex fontSize={"17px"}>Table 5</Flex>
              <Flex fontSize={"10px"} color={"grey"}>
                Leslie K
              </Flex>
            </Flex>
            <Flex>
              <Icon
                as={VscAccount}
                h={"28px"}
                w={"28px"}
                color={"#b0b0b0"}
                cursor={"pointer"}
                onClick={() => {
                  onOpen();
                }}
              ></Icon>
            </Flex>
          </Center>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <LoginModal onClose={onClose} />
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </>
  );

} */
}
