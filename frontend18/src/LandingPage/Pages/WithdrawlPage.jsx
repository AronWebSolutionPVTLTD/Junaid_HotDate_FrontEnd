import React from "react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

const WithdrawlPage = () => {
  return (
    <div className="bg-black-20">
      <div className="min-h-[350px] md:min-h-[400px] flex justify-center items-end bg-black rounded-b-50px">
        <div className="container mx-auto pb-20 text-center">
          <h3 className="font-secondary_font text-40px">Withdraw</h3>
          <p className="text-lg">Withdraw your Money</p>
        </div>
      </div>
      <div className="pt-10 container mx-auto">
        <div className="flex justify-center flex-wrap items-stretch max-w-7xl mx-auto gap-y-5">
          <div className="w-full text-center xl:text-start xl:w-2/5 px-2">
            <div className="xl:px-6">
              <h3 className="text-3xl sm:text-40px font-bold mb-5">
                Withdraw Funds
              </h3>
              <p className="text-sm sm:text-lg mb-5">
                At Swinxter.com, members can easily withdraw funds from their
                member account following a straightforward process:
              </p>
              <p className="text-sm sm:text-lg mb-5">
                Log in: Members need to log in to their Swinxter.com account
                using their credentials.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 xl:w-[30%] px-2">
            <div className="gradient p-8 rounded-lg h-full grid items-center justify-items-start">
              <h3 className="text-5xl font-bold">$ 500</h3>
              <p className="text-lg font-normal mb-2 xl:mb-0">
                Total Money Earned
              </p>
              <Link className="text-base md:text-xl inline-block font-semibold py-2 px-5 rounded-xl bg-white text-black">
                Learn About Earnings
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-1/2 xl:w-[30%] px-2">
            <div className="gradient p-8 rounded-lg h-full grid items-center justify-items-start">
              <h3 className="text-5xl font-bold">$ 300</h3>
              <p className="text-lg font-normal mb-2 xl:mb-0">
                Withdrawable Amount
              </p>
              <Link className="text-base md:text-xl inline-block font-semibold py-2 px-5 rounded-xl bg-white text-black">
                Withdraw Funds
              </Link>
            </div>
          </div>
          <p className="text-sm sm:text-lg mb-5">
            Navigate to Account Settings: Once logged in, members should
            navigate to their account settings or dashboard, where they can
            manage their account details.
          </p>
          <p className="text-sm sm:text-lg mb-5">
            Access Withdrawal Options: In the account settings or dashboard,
            there will be a section specifically for withdrawals. Members can
            find the options to initiate a withdrawal from this section.
          </p>
          <p className="text-sm sm:text-lg mb-5">
            Choose Withdrawal Method: Members can select their preferred
            withdrawal method, which might include options like bank transfer,
            PayPal, or other payment processors supported by Swinxter.com.
          </p>
          <p className="text-sm sm:text-lg mb-5">
            Enter Withdrawal Amount: Members should specify the amount they wish
            to withdraw from their account. Depending on the platform's policies
            and the available balance, there may be minimum or maximum
            withdrawal limits.
          </p>
          <p className="text-sm sm:text-lg mb-5">
            Confirm Withdrawal: Before finalizing the withdrawal, members might
            be asked to confirm their action through a verification process,
            such as entering a secure code or password.
          </p>
          <p className="text-sm sm:text-lg mb-5">
            Await Processing: After confirming the withdrawal, members will
            receive an acknowledgment of their request. The withdrawal will then
            be processed by Swinxter.com's financial team. Processing times may
            vary based on the chosen withdrawal method and the platform's
            internal procedures.
          </p>
          <p className="text-sm sm:text-lg mb-5">
            Receive Funds: Once the withdrawal is processed, the funds will be
            transferred to the member's chosen account or payment method.
          </p>
          <p className="text-sm sm:text-lg mb-5">
            It's essential for members to review Swinxter.com's specific
            withdrawal policies, fees (if any), and processing times to ensure a
            smooth and seamless withdrawal experience.
          </p>
          <p className="text-sm sm:text-lg mb-5">
            It's essential for members to review Swinxter.com's specific
            withdrawal policies, fees (if any), and processing times to ensure a
            smooth and seamless withdrawal experience.
          </p>
        </div>
      </div>
      <div className="pt-20 container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-boldd flex gap-5 items-center">
            Transaction History{" "}
            <span className="text-lg flex items-center">
              <BsChevronDown />
            </span>
          </h3>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 px-0 sm:px-6 lg:px-8">
                <div className="">
                  <table className="min-w-full text-left text-sm md:text-lg font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="pl-0 px-6 py-4">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-4 text-center">
                          Time
                        </th>
                        <th scope="col" className="px-6 py-4 text-center">
                          Amount
                        </th>
                        <th scope="col" className="px-6 py-4 text-right pr-0">
                          Etherscan
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-4 font-medium pl-0">
                          10.06.2022
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          18:23
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          $200
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right pr-0">
                          @View Transaction
                        </td>
                      </tr>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-4 font-medium pl-0">
                          10.06.2022
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          18:23
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          $200
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right pr-0">
                          @View Transaction
                        </td>
                      </tr>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-4 font-medium pl-0">
                          10.06.2022
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          18:23
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          $200
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right pr-0">
                          @View Transaction
                        </td>
                      </tr>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-4 font-medium pl-0">
                          10.06.2022
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          18:23
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          $200
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right pr-0">
                          @View Transaction
                        </td>
                      </tr>
                      <tr className="">
                        <td className="whitespace-nowrap px-6 py-4 font-medium pl-0">
                          10.06.2022
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          18:23
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          $200
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right pr-0">
                          @View Transaction
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="audit-dating__block relative py-4 md:py-16 md:pt-0 container mx-auto mt-14">
        <div className="flex flex-col md:flex-row justify-center items-center text-center gap-6 py-71px">
          <img
            src="images/avn_award2-1.png"
            alt="award"
            className="max-w-200px md:max-w-full"
          />
          <h2 className="text-white text-2xl sm:text-3xl xl:text-40px">
            #1 Adult Dating Site
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WithdrawlPage;
