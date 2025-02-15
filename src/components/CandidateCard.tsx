import { BoxProps, Text, Flex, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Candidate } from 'types/election'
import Card from './Card'
import { MemberCard } from './MemberCard'
import { CandidateCheckbox, CandidateCheckboxProps } from './CandidateCheckbox'
import Markdown, { MarkdownToJSX } from 'markdown-to-jsx'
import { useRedText } from 'util/hooks'

type CandidateCardProps = BoxProps &
  Omit<CandidateCheckboxProps, 'index'> & {
    candidate: Candidate
    isSingular: boolean
  }

const markdownOverrides: MarkdownToJSX.Overrides = {
  li: {
    component: ListItem,
    props: {
      ml: '3rem',
      mb: '4px',
    },
  },
  span: {
    component: Text,
    props: {
      style: {
        textIndent: '2rem',
      },
    },
  },
}
export function CandidateCard({
  candidate,
  selected,
  setSelected,
  disabled,
  isSingular,
  ...rest
}: CandidateCardProps) {
  const isParty = candidate.members.length !== 1
  const redText = useRedText()
  return (
    <>
      {isParty && (
        <Flex mt={4} ml={4}>
          <Text fontSize={['sm', 'lg', 'xl']} fontWeight="regular" mr={2}>
            หมายเลข {candidate.candidateID}
          </Text>
          {!isSingular && (
            <CandidateCheckbox
              index={candidate.id}
              selected={selected}
              setSelected={setSelected}
              disabled={disabled}
            />
          )}
        </Flex>
      )}
      <Card {...rest}>
        {isParty && (
          <>
            {candidate.name && (
              <Text fontSize={['sm', 'lg', 'xl']} fontWeight="regular" mb={4}>
                {candidate.name}
              </Text>
            )}
            {candidate.policy && (
              <>
                <Text
                  fontSize={['xs', 'md', 'lg']}
                  fontWeight="regular"
                  mb={2}
                  color={redText}
                >
                  วิสัยทัศน์พรรค
                </Text>
                <Text
                  fontSize={['xs', 'sm', 'md']}
                  fontWeight={'light'}
                  mb={8}
                  as="div"
                >
                  <Markdown options={{ overrides: markdownOverrides }}>
                    {candidate.policy}
                  </Markdown>
                </Text>
              </>
            )}
          </>
        )}

        <Flex
          flexDirection={['column', 'row']}
          flexWrap="wrap"
          mx={[0, '-6px']}
          mt={-4}
        >
          {candidate.members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
              candidate={candidate}
              selected={selected}
              setSelected={setSelected}
              disabled={disabled}
              isSingular={isSingular}
              w={!isParty ? '100%' : ['100%', '342px', '462px']}
              mx={[0, '6px']}
              mt={4}
            />
          ))}
        </Flex>
      </Card>
    </>
  )
}
